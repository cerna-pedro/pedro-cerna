import React from "react"
import { ExternalLink } from "../../components/footer"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Toggle from "../../components/toggle"
import { InternalLink } from "../about"

const PrivacyPolicyPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Big Tip Pro | Privacy Policy" />
      <Toggle location={location} />
      <section>
        <h1>Big Tip Pro</h1>
        <h2>Privacy Policy</h2>
        <p>
          Pedro Cerna (collectively described as "Pedro Cerna", "I", "my", "me")
          is committed to protecting your privacy. This Privacy Policy applies
          to the Big Tip Pro downloadable application (collectively described as
          "app", "service"). Pedro Cerna built the Big Tip Pro app as a
          Commercial app. This service is provided by Pedro Cerna and is
          intended for use as is.
        </p>
        <p>
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information of anyone who
          decides to use my service.
        </p>
        <p>
          If you choose to download the app or to use my app, then you agree to
          the collection and use of information in relation to this policy. The
          Personal Information that I collect is used for providing and
          improving the service. I will not use or share your information with
          anyone except as described in this Privacy Policy. If you have any
          concerns about providing information to me or it being used as
          described in this Privacy Policy, you should not use my app.
        </p>
        <p>
          The terms used in this Privacy Policy have the same meanings as in my{" "}
          <InternalLink
            fade
            to="/big-tip-pro/terms-and-conditions/"
            duration={0.3}
            title="Big Tip Pro Terms and Conditions"
          >
            Terms and Conditions
          </InternalLink>
          , which are also accessible through a link at the bottom of this page,
          unless otherwise defined in this Privacy Policy.
        </p>
        <h3>International Transfer</h3>
        <p>
          This service is hosted in the United States of America and is subject
          to applicable United States Federal and state laws and regulations.
          Your Personal Information, may be transferred to, stored at, and
          processed by me and my affiliates and other third parties outside of
          the country in which you reside, including, but not limited to the
          United States, where data protection and privacy regulations may not
          offer the same level of protection as in your country. By using my
          app, you consent and agree to this transfer, storing, processing and
          use of your Personal Information in accordance with this Privacy
          Policy.
        </p>
        <h3>Information Collection And Use</h3>
        <p>
          If you provide me feedback or contact me (for support, for example), I
          will collect Personal Information including, but not limited to, your
          name and e-mail address, as well as any other content included in the
          communication. I use this information to assist you with your inquiry
          or support request.
        </p>
        <p>
          The app uses third-party services that may collect information used to
          identify you.
        </p>
        <p>
          Links to the privacy policies of third-party service providers used by
          the app are listed below.
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            <p>
              <ExternalLink
                title="Google Play Services"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Google Play Services
              </ExternalLink>
            </p>
          </li>
          <li>
            <p>
              <ExternalLink
                title="Expo"
                href="https://expo.dev/privacy"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Expo
              </ExternalLink>
            </p>
          </li>
        </ul>
        <p>
          <h3>Log Data</h3>
        </p>
        <p>
          I want to inform you that whenever you use my service, in a case of an
          error in the app I may collect data and information (through
          third-party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol ("IP")
          address, device name, operating system version, the configuration of
          the app when utilizing my service, the time and date of your use of
          the service, and other statistics. In the event that this occurs, this
          information is to be used for the sole intent of implementing a fix
          for the error.
        </p>
        <h3>Cookies</h3>
        <p>
          Cookies are blocks of data that are commonly used as anonymous unique
          identifiers. These are sent to your browser from the websites that you
          visit and are stored on your device's internal memory.
        </p>
        <p>
          This service does not use external cookies explicitly, but does
          implement a key-value storage system on your device to retain your
          preferences for certain features in the app. Also, the app may use
          third-party code and libraries that use cookies to collect information
          and improve their services. If you choose to refuse these cookies, you
          may not be able to use some portions of this app.
        </p>
        <h3>Service Providers</h3>
        <p>
          I may employ third-party companies and individuals due to the
          following reasons:
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            <p>To facilitate my app;</p>
          </li>
          <li>
            <p>To provide the app on my behalf;</p>
          </li>
          <li>
            <p>To perform app-related services;</p>
          </li>
          <li>
            <p>To assist me in analyzing how my app is used.</p>
          </li>
        </ul>
        <p>
          I want to inform users of this app that these third parties are
          granted access to their Personal Information for the sole purpose of
          performing the tasks assigned to them, on my behalf. However, they are
          obligated not to disclose or use the information for any other
          purposes.
        </p>
        <h3>Security</h3>
        <p>
          I am committed to protecting your privacy and any disclosed Personal
          Information, thus I strive to use commercially acceptable means of
          protecting it. But remember that no method of transmission over the
          internet, or method of electronic storage is 100% secure and reliable,
          and I cannot guarantee its absolute security.
        </p>
        <h3>Links To Other Sites</h3>
        <p>
          This service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the privacy policies of these websites. I have no
          control over and assume no responsibility for the content, privacy
          policies, or practices of any third-party sites or services.
        </p>
        <h3>Children's Privacy</h3>
        <p>
          I do not knowingly collect personally identifiable information from
          users under 13 years of age, or under any age of a child as defined in
          a local jurisdiction. In the case I discover that a child under 13
          years of age, or under any age of a child as defined in a local
          jurisdiction, has provided me with Personal Information, I immediately
          delete this from my database and/or servers. If you are a parent or
          guardian and you are aware that your child has provided me with
          Personal Information, please contact me so that I will be able to
          implement the necessary actions. I do not knowingly allow users under
          13 years of age, or under any age of a child as defined in a local
          jurisdiction, to use my app, except as permitted by law.
        </p>
        <h3>Changes To This Privacy Policy</h3>
        <p>
          I may update my Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <p>This policy is effective as of November 28, 2021.</p>
        <h3>Contact Me</h3>
        <p>
          If you have any questions, do not hesitate to contact me at{" "}
          <ExternalLink href="mailto:pedro.d.cerna@gmail.com">
            pedro.d.cerna@gmail.com
          </ExternalLink>
          .
        </p>
        <h3>Relevant Links</h3>
        <p>
          <InternalLink
            fade
            to="/big-tip-pro/terms-and-conditions/"
            duration={0.3}
            title="Big Tip Pro Terms and Conditions"
          >
            Terms and Conditions
          </InternalLink>
        </p>
      </section>
    </Layout>
  )
}

export default PrivacyPolicyPage
