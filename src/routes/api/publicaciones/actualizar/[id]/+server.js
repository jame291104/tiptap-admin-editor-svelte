import { httpClient } from '../../../../../utilities/httpClient';


/** @type {import('./$types').RequestHandler} */


export const PUT = async ({request, params}) => {

     const body = await request.json()
      console.log(body);
    try {
        let res = await httpClient.put(
            "http://137.184.85.36:9000/publicaciones/actualizar/" + params.id,
            body,
            {
                headers: { Authorization: request.headers.get('authorization')} // TODO: Aplicar en las demas peticiones
            });

        console.log('DATA', res);
        
        return new Response(JSON.stringify({data: res.data}), {status: 200});

      } catch (error) {

        console.error('Error processing request:', error);
        return new Response(JSON.stringify({message: error}), {status: 400});
      }
}