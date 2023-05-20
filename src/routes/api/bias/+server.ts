import { openai } from "$lib/server/gptAccess.ts"

import { error } from "@sveltejs/kit";





function prompt(text : string) {
    return `
    Is there any biased views in the following text? If there is bias, then explain the bias in less than 100 words. Otherwise, indicate that there is no bias.

    ${text}
    `
}



export async function POST({
   url, request
}){
    const data = (await request.json()).data;
console.log("IN DSADSADSADADDASDSA")
    try{
        const res = await openai.createCompletion(
            {
                model: "text-davinci-003",
                prompt: prompt(data),
                temperature:0.4,
                max_tokens:200,
                best_of:1
            }
        )

        console.log(res.data)
        return new Response(res.data.choices[0].text);
    }
    catch (err){
        throw error(400, err.response.data)
    }

}

