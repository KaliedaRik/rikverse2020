<script>
    import { metaTitle, metaDescription } from '../handleMetadata.js';
    import { twitterCookies } from '../handleCookies.js';

    let dPath = "M5.80573373,15 C12.7721527,15 16.581877,9.22887915 16.581877,4.22385671 C16.581877,4.06002242 16.581877,3.89618812 16.5714931,3.73466135 C17.3122088,3.19816171 17.9525471,2.53359441 18.4602026,1.77326482 C17.7690988,2.08016568 17.0364595,2.28092039 16.28536,2.36976011 C17.0756874,1.89671742 17.6675677,1.15138674 17.9502395,0.274527115 C17.2072164,0.715264453 16.3938137,1.02678037 15.5457981,1.19407596 C14.1105174,-0.331198284 11.7118448,-0.405039095 10.1865706,1.0290879 C9.20241101,1.95440555 8.78590269,3.33315194 9.09049603,4.64844138 C6.04571636,4.4961447 3.20861397,3.05740266 1.28529161,0.691035437 C0.280364327,2.42167943 0.793788713,4.63574999 2.45751448,5.74682343 C1.85525036,5.72951699 1.26567764,5.56683646 0.738408105,5.27262698 L0.738408105,5.32108501 C0.739561868,7.12441605 2.00985456,8.67622684 3.77741896,9.03389326 C3.2201516,9.18618993 2.63519393,9.20811142 2.06754269,9.09850397 C2.56366064,10.6410847 3.98509624,11.6979313 5.60613279,11.7290828 C4.26430681,12.7824682 2.60750362,13.3547344 0.902242404,13.3535807 C0.601110348,13.3524269 0.299978293,13.3339667 7.10542736e-15,13.2982001 C1.73295152,14.4104273 3.74742113,15 5.80573373,14.9965387";
</script>

<style>
    a {
        @apply bg-white rounded inline-block border-0;
    }
    a:hover {
        background-color: #1da1f2;
    }

    svg {
        fill: #1da1f2;
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

{#if $twitterCookies === 'yes'}
<!-- User has given consent to Twitter cookies being placed on their device -->
<script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>

<a 
    href="https://twitter.com/intent/tweet?text={encodeURIComponent(`${$metaTitle} - ${$metaDescription}`)}&url={encodeURIComponent(window.location.href)}" 
    title="Share with Twitter Followers">

    <svg 
        viewBox="-13 -15 44 44" 
        enable-background="new 0 0 44 44" 
        width="44px" height="44px" 
        aria-hidden="true" focusable="false">
        <g>
            <path d={dPath}></path>
        </g>
    </svg>
</a>

{:else if $twitterCookies !== 'no'}
<!-- User has not yet made a decision about Twitter cookies -->
<a 
    class="cookies-required" 
    href="/cookies" 
    title="Enable Twitter cookies to share with Twitter Followers">

    <svg 
        viewBox="-13 -15 44 44" 
        enable-background="new 0 0 44 44" 
        width="44px" height="44px" 
        aria-hidden="true" focusable="false">
        <g>
            <path d={dPath}></path>
        </g>
    </svg>
</a>

{:else}
<!-- User has declined Twitter cookies -->
{/if}
