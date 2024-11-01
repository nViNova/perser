<script>
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<div class="columns mx-6">

    <div class="column">
      <!-- space taker -->
    </div>

    <div class="column is-two-fifths">
      <div class="card">
        <div class="card-image">
        <figure class="image is-16by9">
            <img 
                src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*bS4bd25L7fwKgvT6vaanBg.jpeg"
                alt="Bootcamp 11.0: DCS welcomes Batch 2024"
            />
        </figure>
        </div>
        <div class="card-content">
          <p class="title is-2 mb-3">Bootcamp 11.0: DCS welcomes Batch 2024</p>
          <p class="mb-3 has-text-weight-light">By Eriene Galinato and Gabriel De Guzman</p>

          <p class="is-6 mb-3 has-text-justified">Last August 7–9, the incoming Department of Computer Science held Bootcamp 11.0: the annual three-day introductory event for freshies, shiftees, and transferees (FSTs).</p>
          
          <span class="tag is-black">DCS</span>
          <span class="tag is-white">Bootcamp</span>
          <span class="tag is-primary">Feature</span>
          <span class="tag is-warning">Batch 2024</span>
        </div>
      </div>
    </div>

    <!-- other news -->
       
    <div class="column">
      <!-- {#each articles as article} -->
      <div class="card">
        <div class="card-image">
        <figure class="image is-4by3">
            <img 
                src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sz2iWH885h_4B4Olhsv_qQ.jpeg"
                alt="DOST broaches ‘ISIP Program,’ ‘Project Marayum’ for natural language research"
            />
        </figure>
        </div>
        <div class="card-content">
          <p class="title is-5 mb-3">DOST broaches ‘ISIP Program,’ ‘Project Marayum’ for natural language research</p>
          <p class="mb-3 has-text-weight-light">By Abram Marcelo</p>
          
          <p class="is-6 mb-3">On April 4, 2024, the Philippines launched the NCSP under the Executive Order #58 to enhance the nation’s cybersecurity landscape.</p>
          <span class="tag is-black">NLP</span>
          <span class="tag is-primary">Parsearch News</span>
          
        </div>
      </div>
      <!-- {/each} -->
    </div>

    <div class="column">
      <!-- space taker -->
    </div>

</div>