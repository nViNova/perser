import { c as create_ssr_component, f as escape, v as validate_component, m as missing_component } from "../../chunks/ssr.js";
import { s as siteTitle } from "../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-cnbvpd_START -->${$$result.title = `<title>${escape(siteTitle)}</title>`, ""}<!-- HEAD_svelte-cnbvpd_END -->`, ""}  ${validate_component(data.ReadMe || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
