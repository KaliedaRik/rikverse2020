<script>
    import { checkCopyright } from '../utilities.js';

    export let publishdate;
    export let complete;

    let creativeCommonsLicenceType = checkCopyright(publishdate, complete);
</script>

<style>
    div {
        width: 100%;
        text-align: center;
        border-top-width: 1px;
        border-top-style: solid;
        border-color: rgb(160 174 192);
        padding-top: 1rem;
    }
    img {
        width: 100px;
        margin-left: auto;
        margin-right: auto;
    }
    p {
        font-size: 0.875rem;
        margin: 0;
        margin-bottom: 1rem;
    }
</style>

<div>

    {#if (creativeCommonsLicenceType.includes('cc-by.'))}
    <img 
        src="{creativeCommonsLicenceType}" 
        alt="Creative Commons 'CC BY 4.0' logo" />
    <p>
        Creative Commons Licence: 
        <a href="https://creativecommons.org/licenses/by/4.0/">
            Attribution 4.0 International
        </a>
    </p>

    {:else if (creativeCommonsLicenceType.includes('cc-by_nc_nd.'))}
    <img 
        src="{creativeCommonsLicenceType}" 
        alt="Creative Commons 'CC BY-NC-ND 4.0' logo" />
    <p>
        Creative Commons Licence: 
        <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
            Attribution-NonCommercial-NoDerivatives 4.0 International
        </a>
    </p>

    {:else}
    <p>Creative Commons Licence: <b>none</b></p>
    {/if}
</div>
