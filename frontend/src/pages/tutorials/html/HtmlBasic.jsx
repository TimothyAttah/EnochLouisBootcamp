import React from 'react';
import HtmlTutorialLists from './HtmlTutorialLists';
import * as Styles from './HtmlStyles';

const HtmlBasic = () => {
  return (
    <div className='mt-5'>
      <Styles.Container>
        <HtmlTutorialLists />
        <div>
          <h1>HTML Basic Examples</h1>
          <p>In this chapter we will show some basic HTML examples.</p>
          <p>Don't worry if we ues tags you have not learned about yet.</p>

          <Styles.ContentBox>
            <h4>HTML Documents</h4>
            <p>
              All HTML documents must start with a document type declaration:{' '}
              <span>{'<!DOCTYPE html'}</span>.
            </p>
            <p>
              The HTML document itself begins with <span>{'<html>'}</span> and
              ends with <span>{'</html>'}</span>.
            </p>
            <p>
              The visible part of the HTML document is between{' '}
              <span>{'<body>'} </span> and <span>{'</body>'}</span>.
            </p>

            <Styles.ExampleBox>
              <h5>Example</h5>
              <p>
                {'<!DOCTYPE html>'}
                <br />
                {'<html lang="en">'}
                <br />
                {'<body>'}
                <br />
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                {'</body>'}
                <br />
                {'</html>'}
              </p>
            </Styles.ExampleBox>
          </Styles.ContentBox>

          <Styles.ContentBox>
            <h4>The {'<!DOCTYPE>'} Declaration</h4>
            <p>
              The <span>{'<!DOCTYPE>'}</span> declaration represents the
              document type, and helps browsers to display web pages correctly.
            </p>
            <p>
              It must only appear once, at the top of the page (before any HTML
              tags).
            </p>
            <p>
              The <span>{'<!DOCTYPE>'}</span> declaration is not case sensitive.
            </p>
            <p>
              The <span>{'<!DOCTYPE>'}</span> declaration for HTML5 is:
            </p>
            <Styles.ExampleBox>
              <h5>Example</h5>
              <p>{'<!DOCTYPE html>'}</p>
            </Styles.ExampleBox>
          </Styles.ContentBox>

          <Styles.ContentBox>
            <h4>HTML Headings</h4>
            <p>
              HTML headings are defined with <span>{'<h1>'}</span> to
              <span>{'<h6>'}</span> tags.
            </p>
            <p>
              <span>{'<h1>'}</span> defines the most important heading.
              <span>{'<h6>'}</span> defines the least important heading.
            </p>

            <Styles.ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<h1>'}</span>This is heading 1 <span>{'</h1>'}</span>
              </p>
              <p>
                <span>{'<h2>'}</span>This is heading 2 <span>{'</h2>'}</span>
              </p>
              <p>
                <span>{'<h3>'}</span>This is heading 3 <span>{'</h3>'}</span>
              </p>
            </Styles.ExampleBox>
          </Styles.ContentBox>
          <Styles.ContentBox>
            <h4>HTML Paragraphs</h4>
            <p>
              HTML paragraphs are defined with the<span>{'<p>'}</span>
              tag:
            </p>

            <Styles.ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<p>'}</span>This is a paragraph. <span>{'</p>'}</span>
              </p>
              <p>
                <span>{'<p>'}</span>This is another paragraph.
                <span>{'</p>'}</span>
              </p>
            </Styles.ExampleBox>
          </Styles.ContentBox>

          <Styles.ContentBox>
            <h4>HTML Links</h4>
            <p>
              HTML links are defined with the<span>{'<a>'}</span>
              tag:
            </p>

            <Styles.ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<a href'}</span> ="https://www.google.com"{'>'} This is
                a link <span>{'</a>'}</span>
              </p>
            </Styles.ExampleBox>
            <p>
              The link's destination is specified in the <span>{'href'}</span>
              attribute.
            </p>
            <p>
              Attribute are used to provide additional information about HTML
              elements.
            </p>
            <p>You will learn more about attributes in later chapter.</p>
          </Styles.ContentBox>

          <Styles.ContentBox>
            <h4>HTML Images</h4>
            <p>
              HTML images are defined with the<span>{'<img>'}</span>
              tag.
            </p>

            <p>
              The source file <span>{'(src)'}</span>, alternate text{' '}
              <span>{'(alt)'}</span>, <span>width</span>, and{' '}
              <span>height</span> are provided as attributes:
            </p>

            <Styles.ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<img src'}</span> ="google.jpg" <span>{'alt'}</span>{' '}
                ="google.com" <span>width</span> ="104" <span>height</span>{' '}
                ="142"
                <span>{'>'}</span>
              </p>
            </Styles.ExampleBox>
          </Styles.ContentBox>
        </div>
      </Styles.Container>
    </div>
  );
};

export default HtmlBasic;
