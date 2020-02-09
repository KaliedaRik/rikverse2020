<script>
    import { checkCopyright } from '../utilities.js';

    export let publishdate;
    export let complete;

    let creativeCommonsLicenceType = checkCopyright(publishdate, complete);
</script>

<style>
    div {
        @apply w-full text-center border-t border-gray-500 pt-4;
    }
    img {
        width: 100px;
        @apply mx-auto;
    }
    p {
        @apply text-sm;
    }
</style>

<div>

    {#if creativeCommonsLicenceType == '/images/cc-by.png'}
    <img 
        src="{creativeCommonsLicenceType}" 
        alt="Creative Commons creativeCommonsLicenceType 'CC BY 4.0' image" />
    <p>
        Creative Commons Licence: 
        <a href="https://creativecommons.org/licenses/by/4.0/">
            Attribution 4.0 International
        </a>
    </p>

    {:else if creativeCommonsLicenceType == '/images/cc-by_nc_nd.png'}
    <img 
        src="{creativeCommonsLicenceType}" 
        alt="Creative Commons creativeCommonsLicenceType 'CC BY-NC-ND 4.0' image" />
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
