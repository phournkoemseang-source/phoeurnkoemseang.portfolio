import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { ContactSection } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Contact Me",
    description: "Get in touch with PHOEURN Koemseang",
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
        title="Contact Me"
        description="Get in touch with PHOEURN Koemseang"
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
