import React from 'react';
import HtmlTutorialLists from './HtmlTutorialLists';
import {
  Container,
  ContentBox,
  TopDescription,
  ListsDescription,
  ExampleBox,
} from './HtmlStyles';

const HtmlAttributes = () => {
  return (
    <div className='mt-5'>
      <Container>
        <HtmlTutorialLists />
        <div>
          <div>
            <h1>HTML Attributes</h1>
            <button>previous</button>
            <button>next</button>
          </div>

          <TopDescription>
            HTML attributes provides additional information about HTML elements.
          </TopDescription>

          <ListsDescription>
            <h4>HTML Attributes</h4>
            <li>
              All HTML elements can have <strong>attributes</strong>
            </li>
            <li>
              Attributes provide <strong>additional information</strong> about
              elements
            </li>
            <li>
              Attributes are always specified in <strong>the start tag</strong>
            </li>
            <li>
              Attributes usually come in name/value pairs like:{' '}
              <strong>name="value"</strong>
            </li>
          </ListsDescription>

          <ContentBox>
            <h4>The href Attribute</h4>
            The
            <span>{' <a> '}</span>
            tag defines a hyperlink. The <span>href</span> attribute specifies
            the URL of the page the link goes to:
            <ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<a '}</span>
                <span>{'href'}</span>
                {'="https://www.google.com">Google.com'} <span>{'</a>'}</span>
              </p>
            </ExampleBox>
          </ContentBox>

          <ContentBox>
            <h4>The src Attribute</h4>
            The
            <span>{'<img>'}</span>
            tag is used to embed an image in an HTML page. The <span>
              src
            </span>{' '}
            attribute specifies the path to the image to be displayed:
            <ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<img '}</span>
                <span>{'src'}</span>
                {'="img_girl.jpg">'}
              </p>
            </ExampleBox>
          </ContentBox>

          <ContentBox>
            <p>
              There are two ways to specify the URL in the <span>src</span>{' '}
              attribute:
            </p>
            <p>
              <strong>1. Absolute URL</strong>- Links to an external image that
              is hosted on another website. Example: <br />
              src="https://www.google.com/images/img_girl.jpg"
            </p>
            <p>
              <strong>Notes:</strong> External images might be under copyright.
              If you do not get permission to use it, you may be in violation of
              copyright laws. In addition, you cannot control external images,
              it can suddenly be removed or changed.
            </p>
            <p>
              <strong>2. Relative URL</strong>- Links to an image that is hosted
              within the website. Here, the URL does not include the domain
              name. If the URL begins without a slash, it will be relative to
              the current page. Example: src="img_girl.jpg". If the URL begins
              with a slash, it will be relative to the domain. Example:
              src="/images/img_girl.jpg"
            </p>
            <p>
              <strong>Tip:</strong> It is almost always best to use relative
              URLs. They will not break if you change domain.
            </p>
          </ContentBox>

          <ContentBox>
            <h4>The width and height Attributes</h4>
            The
            <span>{'<img>'}</span>
            tag should also contain <span>width</span> and <span>height</span>
            attributes, which specify the width and height of the of the image
            (in pixels):
            <ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<img '}</span>
                <span>{'src'}</span>
                {'="img_girl.jpg" '}
                <span>width</span>
                {'="500" '}
                <span>height</span>
                {'="600">'}
              </p>
            </ExampleBox>
          </ContentBox>

          <ContentBox>
            <h4>The alt Attribute</h4>
            The required <span>alt</span> attribute for the
            <span>{'<img>'}</span>
            tag specifies an alternate text for an image, if the image for some
            reason cannot be displayed. This can be due to slow connection, or
            an error in the <span>src</span> attribute, or if the user uses a
            screen reader.
            <ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<img '}</span>
                <span>{'src'}</span>
                {'="img_girl.jpg" '}
                <span>alt</span>
                {'"=Girl with a jacket" '}
              </p>
            </ExampleBox>
          </ContentBox>

          <ExampleBox>
            <h5>Example</h5>
            <p style={{ color: 'black' }}>
              See what happens if we try to display an image that does not
              exist:
            </p>

            <p>
              <span style={{ color: 'red' }}>{'<img '}</span>
              <span style={{ color: 'red' }}>{'src'}</span>
              {'="img_typo.jpg" '}
              <span style={{ color: 'red' }}>alt</span>
              {'"=Girl with a jacket" '}
            </p>
          </ExampleBox>

          <ContentBox>
            <h4>The style Attribute</h4>
            The <span>style</span> attribute is used to add styles to an
            element, such as color, font, size, and more.
            <ExampleBox>
              <h5>Example</h5>

              <p>
                <span>{'<p style'}</span>
                {'="color:red;">This is a red paragraph.'}
                <span>{'</p>'}</span>
              </p>
            </ExampleBox>
          </ContentBox>

          <ContentBox>
            <h4>The lang Attribute</h4>
            <p>
              You should always include the <span>lang</span> attribute inside
              the <span>{'<html>'}</span> tag, to declare the language of the
              Web page. This is meant to assist search engines and browsers.
            </p>
            <p>The following example specifies English as the language:</p>
            <ExampleBox>
              <p>
                {'<!DOCTYPE html>'}
                <br />
                {'<html lang="en">'}
                <br />
                {'<body>'}
                <br />
                <p>...</p>
                {'</body>'}
                <br />
                {'</html>'}
              </p>
            </ExampleBox>
            <p>
              Country codes can also be added to the language code in the{' '}
              <span>lang</span> attribute. So, the first two characters define
              the language of the HTML page, and the last two characters define
              the country.
            </p>
            <p>
              The following example specifies English as the language and United
              States as the country:
            </p>

            <ExampleBox>
              <p>
                {'<!DOCTYPE html>'}
                <br />
                {'<html lang="en-US">'}
                <br />
                {'<body>'}
                <br />
                <p>...</p>
                {'</body>'}
                <br />
                {'</html>'}
              </p>
            </ExampleBox>
          </ContentBox>

          <ContentBox>
            <h4>The title Attribute</h4>
            <p>
              The <span>title</span> attribute defines some extra information
              about an element.
            </p>
            <p>
              The value of the title attribute will be displayed as a tooltip
              when you mouse over the element:
            </p>
            <ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<p title'}</span>
                {'="I\'m a tooltip">This is a paragraph.'}
                <span>{'</p>'}</span>
              </p>
            </ExampleBox>
          </ContentBox>

          <ContentBox>
            <h4>Chapter Summary</h4>
            <ListsDescription>
              <li>
                The <span>href</span> attribute of <span>{'<a>'}</span>
                specifies the URL of the page the link goes to
              </li>
              <li>
                The <span>src</span> attribute of <span>{'<img>'}</span>
                specifies the path to the image to be displayed
              </li>
              <li>
                The <span>width</span> and <span>height</span> attribute of
                <span>{'<img>'}</span> provide size information for images
              </li>
              <li>
                The <span>style</span> attribute is used to add styles to an
                element, such as color, font, size, and more
              </li>
              <li>
                The <span>lang</span> attribute of the <span>{'<html>'}</span>{' '}
                tag declares the language of the Web page
              </li>
              <li>
                The <span>title</span> attribute defines some extra information
                about element
              </li>
            </ListsDescription>
          </ContentBox>
        </div>
      </Container>
    </div>
  );
};

export default HtmlAttributes;
