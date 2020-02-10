<script>
    import { navigateTo } from '../utilities.js';

    import { facebookCookies } from '../handleCookies.js';

    let dPath = "M5.73,17 L5.73,9.246 L8.333,9.246 L8.723,6.223 L5.73,6.223 L5.73,4.294 C5.73,3.419 5.973,2.823 7.228,2.823 L8.828,2.822 L8.828,0.119 C8.551,0.082 7.601,0 6.496,0 C4.189,0 2.609,1.408 2.609,3.995 L2.609,6.223 L0,6.223 L0,9.246 L2.609,9.246 L2.609,17 L5.73,17 Z";

    const redirectToCookies = (e) => navigateTo('/cookies');

    const setupFacebook = (e) => {

        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.likes',
            action_properties: JSON.stringify({object: `${window.location.href}`})
        }, response => console.log(response));
    };
</script>

<style>
    button {
        @apply bg-white rounded inline-block border-0;
    }
    button:hover {
        background-color: #3b5998;
    }

    svg {
        fill: #3b5998;
    }
    svg:hover {
        fill: #ffffff;
    }

    .cookies-required {
        @apply bg-gray-300 rounded inline-block border-0;
    }
    .cookies-required:hover {
        @apply bg-gray-500;
    }

    .cookies-required svg {
        fill: #A0AEC0;
    }
    .cookies-required svg:hover {
        fill: #E2E8F0;
    }
</style>

{#if $facebookCookies === 'yes'}
<!-- User has given consent to Facebook cookies being placed on their device -->
<script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>

<button 
    on:click={setupFacebook} 
    title="Share with Facebook Friends">
    <svg 
        viewBox="-17 -13 44 44" 
        enable-background="new 0 0 44 44" 
        width="44px" height="44px" 
        aria-hidden="true" focusable="false">
        <g>
            <path d={dPath}></path>
        </g>
    </svg>
</button>

{:else if $facebookCookies !== 'no'}
<!-- User has not yet made a decision about Facebook cookies -->
<button 
    class="cookies-required" 
    on:click={redirectToCookies} 
    title="Enable Facebook cookies to share with Facebook Friends">
    <svg 
        viewBox="-17 -13 44 44" 
        enable-background="new 0 0 44 44" 
        width="44px" height="44px" 
        aria-hidden="true" focusable="false">
        <g>
            <path d={dPath}></path>
        </g>
    </svg>
</button>

{:else}
<!-- User has declined Facebook cookies -->
{/if}
