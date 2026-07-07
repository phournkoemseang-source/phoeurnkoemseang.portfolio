import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { ContactSection } from "@/components";

const pageMeta = {
  title: "Contact Me",
  description: "Get in touch with PHOEURN Koemseang",
};

export async function generateMetadata() {
  return Meta.generate({
    title: pageMeta.title,
    description: pageMeta.description,
    baseURL: baseURL,
    image: "/api/og/generate?title=Contact%20Me",
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <Column maxWidth="m" paddingY="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={pageMeta.title}
        description={pageMeta.description}
        path="/contact"
        image="/api/og/generate?title=Contact%20Me"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}/images/me.jpg`,
        }}
      />
      <ContactSection />
    </Column>
  );
}
