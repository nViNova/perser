import { c as create_ssr_component, a as subscribe, f as escape, e as each } from "../../chunks/ssr.js";
import { s as siteTitle } from "../../chunks/config.js";
const css = {
  code: '@import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";:root{--bulma-primary-h:54deg;--bulma-primary-s:98%;--bulma-primary-l:50%;--bulma-scheme-h:0;--bulma-scheme-s:0%;--bulma-light-l:97%;--bulma-body-background-color:hsl(0,0%,97%);--bulma-body-color:hsl(0deg,0%,28%);--bulma-strong-color:hsl(0deg,0%,28%);--bulma-subtitle-color:hsl(0deg,0%,28%);--bulma-subtitle-strong-color:hsl(0deg,0%,28%)}.card.svelte-qx4kxg{--bulma-card-color:hsl(0deg,0%,28%);--bulma-card-background-color:hsl(0,0,97%);--bulma-card-header-color:hsl(0deg,0%,28%)}.title.svelte-qx4kxg{--bulma-title-color:hsl(0deg,0%,28%)}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { data } = $$props;
  let articles = $state([1, 2, 3, 4, 5, 6, 7]);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_state();
  return `${$$result.head += `<!-- HEAD_svelte-cnbvpd_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<!-- HEAD_svelte-cnbvpd_END -->`, ""}  <div class="columns mx-6"><div class="column" data-svelte-h="svelte-1594ypd"></div> <div class="column is-two-fifths" data-svelte-h="svelte-1p08khz"><div class="card svelte-qx4kxg"><div class="card-image"><figure class="image is-16by9"><img src="https://miro.medium.com/v2/resize:fit:786/format:webp/1*bS4bd25L7fwKgvT6vaanBg.jpeg" alt="Bootcamp 11.0: DCS welcomes Batch 2024"></figure></div> <div class="card-content"><p class="title is-2 mb-3 svelte-qx4kxg">Bootcamp 11.0: DCS welcomes Batch 2024</p> <p class="mb-3 has-text-weight-light">By Eriene Galinato and Gabriel De Guzman</p> <p class="is-6 mb-3 has-text-justified">Last August 7–9, the incoming Department of Computer Science held Bootcamp 11.0: the annual three-day introductory event for freshies, shiftees, and transferees (FSTs).</p> <span class="tag is-black">DCS</span> <span class="tag is-white">Bootcamp</span> <span class="tag is-primary">Feature</span> <span class="tag is-warning">Batch 2024</span></div></div></div>  <div class="column">${each(articles, (article) => {
    return `<div class="card svelte-qx4kxg" data-svelte-h="svelte-ss52wi"><div class="card-image"><figure class="image is-4by3"><img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sz2iWH885h_4B4Olhsv_qQ.jpeg" alt="DOST broaches ‘ISIP Program,’ ‘Project Marayum’ for natural language research"> </figure></div> <div class="card-content"><p class="title is-5 mb-3 svelte-qx4kxg">DOST broaches ‘ISIP Program,’ ‘Project Marayum’ for natural language research</p> <p class="mb-3 has-text-weight-light">By Abram Marcelo</p> <p class="is-6 mb-3">On April 4, 2024, the Philippines launched the NCSP under the Executive Order #58 to enhance the nation’s cybersecurity landscape.</p> <span class="tag is-black">NLP</span> <span class="tag is-primary">Parsearch News</span></div> </div>`;
  })}</div> <div class="column" data-svelte-h="svelte-1594ypd"></div></div> `;
});
export {
  Page as default
};
