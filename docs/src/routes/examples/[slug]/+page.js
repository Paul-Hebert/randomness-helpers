import { error } from "@sveltejs/kit";
import { examples } from "../../../examples/index";

export function load({ params }) {
  const example = examples.find(({ slug }) => slug === params.slug);
  if (example) {
    return {
      example,
    };
  }

  throw error(404, "Not found");
}
