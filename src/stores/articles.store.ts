import { writable } from "svelte/store";
import { httpClient } from "../utilities/httpClient";

export interface Article { 
    _id?: string;
    title: string; // requerido
    image_url: string;
    description: string;
    content: string; // requerido
    author?: string; // opcional
    category?: string; // opcional
    createdAt?: Date; // requerido, con valor por defecto
    updatedAt?: Date; // opcional
}

export const state = writable({
    article: {},
    newArtcle: {},
    article_id: "",
    token_received: ""
})

export const api = {

    // async submitArticle( payload: {

    // })
    async getArticleById(payload: {
        article_id: string,
    }, auth_token: string
    ) {
        // let params = {
        //     user_id: payload.user_id,
        // };

        // "checkpoint_id" in payload ? params["checkpoint_id"] = payload.checkpoint_id : null;
        // "state" in payload ? params["state"] = payload.state : null;
        // "checkpoint_type" in payload ? params["checkpoint_type"] = payload.checkpoint_type : null;


        // /user/loans/{user_id}
        return new Promise((resolve) => {
            //console.log("RUTAS de ENTORNO EWALLET", env.PUBLIC_EWALLET_FE_URL)
            //console.log("RUTAS de ENTORNO", env.SECRET_CC_BASE_URL)
            httpClient
                .get("http://localhost:9000/publicaciones/obtener/" + payload.article_id, { headers: { Authorization: "Bearer " + auth_token } }
                ).then((response) => {
                    console.log("SUCCESS - getArticleById", response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log("ERROR - getArticleById");
                    console.log(error.response);
                    resolve(false);
                });
        }); //PROMISE
    }, // end getArticleById

    async submitArticle(payload: Article, auth_token: string) {

        return new Promise((resolve) => {

            httpClient.post('http://localhost:9000/publicaciones/crear',
                payload,
                {
                    headers: { Authorization: "Bearer " + auth_token }
                }
            ).then((response) => {
                console.log("SUCCESS - submitArticle", response)
                resolve(response)

            }).catch((error) => {
                console.log('ERROR - submitArticle');
                console.log(error.response);
                resolve(false);
            })
        })
    },

    async updateArticle(payload: Article, auth_token: string
    ) {
        let body = payload

        return new Promise((resolve, reject) => {

            console.log('BEFORE Article UPDATE', { payload });

            httpClient.put("http://localhost:9000/publicaciones/actualizar/" + payload._id,
                body,
                {
                    headers: { Authorization: "Bearer " + auth_token }
                }
            ).then((response) => {
                console.log("SUCCESS - updateArticle", response)
                resolve(response)

            }).catch((error) => {
                console.log('ERROR - updateArticle');
                console.log(error.response);
                resolve(false);
            })
        })
    },
}