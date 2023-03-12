import React, {useEffect, useState} from "react";

function Summary(data){
    console.log(data);
    console.log("data sent to me is ^^^^^");
    const [condensed, setCondensed] = useState('');
    const [place, setPlace] = useState('');
    const [results, setResults] = useState([]);
    const [artist, setArtist] = useState("");
    const [link, setLink] = useState("");

    async function handleSearch(data1){
        console.log('hello we are herer __----------------')
        console.log(data1);
        //this only gives us a snippet of the wikipedia page
        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch=${data1}`
        console.log(endpoint)
        const response = await fetch(endpoint);

        if (!response.ok){
            throw Error(response.statusText);
        }


        const convertToJson = await response.json();
        setResults(convertToJson.query.search[0]);
        // setPid(convertToJson.query.search[0]['pageid']);
        const pageid = convertToJson.query.search[0]['pageid']
        // console.log("HELLOOO --> " + pid)
        // console.log(convertToJson.query.search[0]['snippet']);

        const textFromWikiEndpoint = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${pageid}&origin=*`
        const responseTextFromWiki = await fetch(textFromWikiEndpoint);
        const data = await responseTextFromWiki.json();

        if (!responseTextFromWiki.ok){
            throw Error(response.statusText);
        }
        //logs the whole extract of the search
        console.log(data.query.pages[pageid]["extract"]);
        const wikiExtract = data.query.pages[pageid]["extract"]
        console.log(wikiExtract)
        console.log("^^^ wiki extract")
        const dataCohere = await fetch(`https://api.cohere.ai/v1/generate`, {
        method: 'POST',
        headers: {
            'Authorization': 'BEARER C0frn22ELlSINiUJpuaXRzsVfngeDitNEpSrDTLQ',
            'Content-Type': 'application/json'
        },
        // body: '{\n      "model": "xlarge",\n      "prompt": "Vancouver canada",\n      "max_tokens": 300,\n      "temperature": 0.9,\n      "k": 0,\n      "p": 0.75,\n      "stop_sequences": [],\n      "return_likelihoods": "NONE"\n    }',
        body: JSON.stringify({
            'model': 'summarize-xlarge',
            'prompt': wikiExtract,
            'max_tokens': 200,
            'temperature': 0.9,
            // 'k': 0,
            // 'p': 0.15,
            'stop_sequences': [],
            'return_likelihoods': 'NONE'
        })
        }).then((response)=>{
            console.log(response);
            return response.json()
        }).then((data) => {
            console.log(data)
            console.log(data['generations'][0]['text']);
            setCondensed(data['generations'][0]['text']);

        });

        // console.log("HERE IS THE COHERE API");
        // console.log(dataCohere)
        // console.log("COHERE DATA IS DONE!")
    }

    const artistName = async (e) => {
        e.preventDefault()
        const result = await fetch("https://api.spotify.com/v1/search?" + new URLSearchParams({
            q: artist,
            type: "track",
            limit: 1
        }), {
            method: "GET",
            headers: {
                Authorization: 'Bearer BQD-fylo9HRoYLy0OvN2Cv2GGomsAkC_u16yT5qki6FmnOpe6bAHEO1wxupv-th0i4l2j6-jBoP3UPLz4ucfL-vY-VyAGI-QdWIXmL2aXR6WvwIX_xqQeAcfZaZ-4F2XHQ2YLl--REarn1G700FDLQmmceGOsCWNCv7TZfYypcDGRJjb4vZutU6Xbf0VJFxQ-Srq'
            }
        })
        const jsonLogs = await result.json()
        console.log("THIS IS IN ARTIST NAME LOGGED BELOW!!!")
        console.log(jsonLogs.tracks.items[0].external_urls.spotify)
        window.location.replace(jsonLogs.tracks.items[0].external_urls.spotify)
        //setLink(jsonLogs.tracks.items[0].external_urls.spotify)
    }

    useEffect(()=>{
        handleSearch(data)
    }, [data]);


    return(
        <div>
            {/* <p onLoad={handleSearch()}></p> */}
            <h1 >Welcome to the summary page</h1>
            {data}
            {condensed}
            <button onClick={() => {setArtist(data); console.log(data)}}></button>
            <button onClick={artistName}>Spotify link here!</button>

            {/* <a href={link} onClick={artistName}>Spotify link here!</a> */}
        </div>
        )
}

export default Summary;