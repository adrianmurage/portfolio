import { annotate } from "https://unpkg.com/rough-notation?module";

function create_annotation(nodeid, annotation_type, annotation_color) {
  const annotation = annotate(document.querySelector(nodeid), {
    type: annotation_type,
    color: annotation_color,
    multiline: true,
  });

  return annotation;
}

const secondyear = create_annotation("#secondyear", "highlight", "#fde68a");
const engineer = create_annotation("#engineer", "highlight", "#c7d2fe");
const challenge = create_annotation("#challenge", "highlight", "#bae6fd");
const podcast = create_annotation("#podcast", "highlight", "#a7f3d0");
const fulltime = create_annotation("#fulltime", "highlight", "#f3c6a7");

setTimeout(function () {
  secondyear.show();
}, 200);

setTimeout(() => {
  engineer.show();
}, 1500);

setTimeout(() => {
  podcast.show();
}, 2500);

setTimeout(() => {
  fulltime.show();
}, 3500);

setTimeout(function () {
  challenge.show();
}, 4500);
