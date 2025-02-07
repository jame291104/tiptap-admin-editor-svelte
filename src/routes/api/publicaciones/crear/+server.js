import { httpClient } from '../../../../utilities/httpClient';

/** @type {import('./$types').RequestHandler} */


export const POST = async ({request, url}) => {

     const body = await request.json()
      console.log("BODY", body);
    try {
        let res = await httpClient.post(
            "http://137.184.85.36:9000/publicaciones/crear",
          body,
          {
            headers: { Authorization: request.headers.get('authorization')}
          });
        
        return new Response(JSON.stringify({data: res.data, body: body}), {status: 200});

      } catch (error) {

        console.error('Error processing request:', error);
        return new Response(JSON.stringify({message: error}), {status: 400});
      }
}