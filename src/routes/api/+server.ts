//@ts-nocheck

import { openai } from "$lib/server/gptAccess.ts"
import type CharInput from "$lib/types"
import { error } from "@sveltejs/kit";
import type { RequestHandler, RouteParams } from "./$types"

function makePrompt(char: CharInput) {
    console.log("prompt", `
    Suggest names for characters of a certain type. Suggest ${char.count} names in total.

    Character type: Fantasy
    Count: 4
    Names: Luna, Helios, Estel, Gagriel

    Character type: Super Hero
    Count: 3
    Names: Uber Man, The Thunder Smasher, Invisi-boy

    Character type: ${char.charType}
    Count: ${char.count}
    Names:`)
    return `
    Suggest names for characters of a certain type. Suggest "Count" names in total.

    Character type: Fantasy
    Count: 4
    Names: Luna, Helios, Estel, Gagriel

    Character type: Super Hero
    Count: 3
    Names: Uber Man, The Thunder Smasher, Invisi-boy

    Character type: ${char.charType}
    Count: ${char.count}
    Names:`;
}

// /**@type {RequestHandler} */
export async function GET({
    url, request
}) {
    const header = request.headers
 
    
    try {
        const completion = await openai.createCompletion(
            {
                model: "text-davinci-003",
                prompt: makePrompt({
                    charType: header.get("charType"),
                    count: header.get("count")
                }),

                temperature: 0.5,
            }
        )
        console.log(completion.data)
        completion.data.choices.forEach(val => console.log(val.text))

        return new Response(completion.data.choices[0].text);
    }
    catch (err) {
        throw error(400, err.response.data)
    }
} 