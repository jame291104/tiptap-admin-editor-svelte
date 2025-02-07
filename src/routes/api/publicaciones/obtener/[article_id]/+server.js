import { httpClient } from "../../../../../utilities/httpClient";



/** @type {import('./$types').RequestHandler} */

export const GET = async ({request, params}) => {
  console.log("backend de svelte");


    try {

        let res = await httpClient.get("http://137.184.85.36:9000/publicaciones/obtener" + params.article_id,
        {
          headers: { Authorization: request.headers.get('authorization')}
        });
        
        return new Response(JSON.stringify({data: res.data}), {status: 200});

      } catch (error) {

        console.error('Error processing request:', error);
        return new Response(JSON.stringify({message: error}), {status: 400});
      }
}