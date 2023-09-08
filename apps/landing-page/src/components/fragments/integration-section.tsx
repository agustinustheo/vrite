import { Observed } from "./observed";
import { Section } from "./section";
import { FeatureCard, TextFeatureCard } from "./feature-card";
import { Component, For } from "solid-js";
import { mdiPencil, mdiCodeTags, mdiGit, mdiCogOutline, mdiArchiveOutline } from "@mdi/js";
import clsx from "clsx";
import editorImageDark from "#assets/images/dark/editor.png";
import editorImageLight from "#assets/images/light/editor.png";
import editorGraphicDark from "#assets/graphics/dark/editor.png";
import editorGraphicLight from "#assets/graphics/light/editor.png";
import codeEditorGraphicDark from "#assets/graphics/dark/code-editor.png";
import codeEditorGraphicLight from "#assets/graphics/light/code-editor.png";
import { Image } from "#components/primitives";

const features = [
  {
    imageDark: editorGraphicDark.src,
    imageLight: editorGraphicLight.src,
    header: "GitHub integration",
    label: "Let it flow",
    imageAlt: "Content editor",
    icon: mdiPencil,
    gradient: false,
    content: (
      <>
        Write and format your content just the way you prefer it. Use Markdown or keyboard shortcut
        along with modern editing toolbars and menus to create your next amazing content piece.
      </>
    )
  },
  null,
  {
    imageDark: codeEditorGraphicDark.src,
    imageLight: codeEditorGraphicLight.src,
    header: "Advanced code editor",
    label: "All in on code",
    imageAlt: "Integrated code editor",
    icon: mdiCodeTags,
    gradient: true,
    reverse: true,
    content: (
      <>
        The power of VS Code in your code snippet editor. Enjoy code editing with advanced syntax
        highlighting, autocompletion, and more, right beside your content. And when you're done,
        format your code with Prettier to manage those tabs and spaces!
      </>
    )
  }
];
const secondaryFeatures = [
  {
    icon: mdiGit,
    header: "Version control",
    label: "Backup every step",
    comingSoon: true,
    text: "Enjoy Git-level version control, with full edit history and easy version tagging."
  },
  {
    icon: mdiCogOutline,
    header: "Configuration",
    label: "Everything as you want it",
    text: "Configure the entire editing experience - from heading sizes to inline formatting options."
  },
  {
    icon: mdiArchiveOutline,
    header: "Asset manager",
    label: "Store anything",
    comingSoon: true,
    text: "Upload and manage images, videos, and other assets alongside your editor."
  }
];
const IntegrationSection: Component = () => {
  return (
    <Section>
      <div class="flex flex-col lg:flex-row gap-12 pb-4">
        <div class="flex-[2] max-h-[20rem] gradient-image-mask">
          <Image
            alt="Vrite content editor"
            srcDark={editorImageDark.src}
            srcLight={editorImageLight.src}
            class="rounded-2xl"
          />
        </div>
        <div class="flex-[2]">
          <h2 class="text-3xl md:text-4xl pb-4">Integrates right in</h2>
          <p class="text-xl md:text-2xl">
            With built-in GitHub synchronization and powerful APIs, Vrite integrates right into your
            workflow. Set it up in minutes and get back to work!
          </p>
        </div>
      </div>
      <div class="grid max-w-screen-xl grid-cols-1 gap-4 md:gap-4 md:grid-cols-1">
        <For each={features}>
          {(feature) => {
            if (!feature) {
              return (
                <div class="grid grid-cols-1 gap-4 md:gap-4 lg:grid-cols-3">
                  <For each={secondaryFeatures}>
                    {(secondaryFeature, index) => {
                      return (
                        <Observed
                          class={clsx("transform transition-all duration-500 ease-out")}
                          style={{ "transition-delay": `${100 * index()}ms` }}
                          outOfViewClass="invisible translate-y-1/3"
                        >
                          <TextFeatureCard {...secondaryFeature} class="md:p-8" />
                        </Observed>
                      );
                    }}
                  </For>
                </div>
              );
            }

            return (
              <Observed
                class="transform transition-all duration-500 ease-out"
                outOfViewClass="invisible translate-y-1/3"
              >
                <FeatureCard {...feature} />
              </Observed>
            );
          }}
        </For>
      </div>
    </Section>
  );
};

export { IntegrationSection };
