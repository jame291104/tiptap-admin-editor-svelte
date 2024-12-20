<script lang="ts">
    import TiptapEditor from "../../components/tiptapEditor.svelte";
    import '../../scss/tiptap.scss';
    import { api as articleApi, state as articleState } from "../../stores/articles.store";
    import { page } from "$app/stores";
  import { onMount } from "svelte";

    let article_id: string  = $page.url.searchParams.get('article-id') ?? "null";
    let token: string  = $page.url.searchParams.get('token') ?? "null";
    let action: string  = $page.url.searchParams.get('action') ?? "null";

    console.log("PARAMS", {article_id, token, action});

    const getArticle = async () => {
    let res = await articleApi.getArticleById(
      { article_id: article_id }, token);

      console.log("RES", res);

      if (res) {
        $articleState.article_id = article_id
        $articleState.article = res
        $articleState.token_received = token
        console.log("STATE", $articleState);
        
      } else {
        alert("Falló la consulta de articulo por su id")
      }
    };
    
    onMount(async () => {
        if (article_id !== "null" && token !== "null" && action !== "null") {
            await getArticle() 
        }
    })

</script>

<div class="edit-article-container">  
    <h1>Edit Article</h1>
    
    {#if $articleState.token_received && $articleState.article_id}
    <div class="tiptap">
        <TiptapEditor defaultContent={$articleState.article.content}/>
    </div>
    {/if}
</div>

<style lang="scss">
    .edit-article-container{
        width: 80vw;
        margin: auto;
        max-width: 1200px;
    }
</style>