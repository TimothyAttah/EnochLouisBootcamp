import React from 'react';
import HtmlTutorialLists from './HtmlTutorialLists';
import * as Styles from './HtmlStyles';
import element1 from '../../../assets/element1.png';
import element2 from '../../../assets/element2.png';
import element3 from '../../../assets/element3.png';

const HtmlIntroduction = () => {
  return (
    <div className='mt-5'>
      <Styles.Container>
        <HtmlTutorialLists />
        <div>
          <h1>HTML Introduction</h1>
          <Styles.TopDescription>
            HTML is the standard markup language for creating Web pages.
          </Styles.TopDescription>

          <Styles.ListsDescription>
            <h4>What is HTML?</h4>
            <li>HTML stands for Hyper Text Markup Language</li>
            <li>HTML is the standard markup language for creating Web pages</li>
            <li>HTML describes the structure of a Web page</li>
            <li>HTML consits of a series of elements</li>
            <li>HTML elements tell the browsers how to display the content</li>
            <li>
              HTML elements label pieces of content such as "this is a heading",
              "this is a paragraph", "this is a link" etc.
            </li>
          </Styles.ListsDescription>
          <Styles.ContentBox>
            <h4>A Simple HTML Document</h4>

            <Styles.ExampleBox>
              <h5>Example</h5>
              <p>
                <span>{'<!DOCTYPE html>'}</span>
                <br />
                <span>{'<html>'}</span>
                <br />
                <span>{'<head>'}</span>
                <br />
                <span>{'<title>'}</span> Page Title <span>{'</title>'}</span>
                <br />
                <span>{'</head>'}</span>
                <br />
                <span>{'<body>'}</span>
                <br />
                <span>{'<h1>'}</span>My First Heading <span>{'<h1>'}</span>
                <br />
                <span>{'<p>'}</span>My first paragraph <span>{'<p>'}</span>
                <br />
                <span>{'</body>'}</span>
                <br />
                <span>{'</html>'}</span>
              </p>
            </Styles.ExampleBox>
          </Styles.ContentBox>
          <Styles.ContentBox>
            <Styles.ListsDescription>
              <h4>Example Explained</h4>
              <li>
                The <span>{'<!DOCTYPE html>'}</span> declaration defines that
                this document is an HTML5 document
              </li>
              <li>
                The <span>{'<html>'}</span> element is the root element of an
                HTML page
              </li>
              <li>
                The <span>{'<head>'}</span> element contains meta information
                about the HTML page
              </li>
              <li>
                The <span>{'<title>'}</span> element specifies a title for the
                HTML page (which is shown in the browser's title bar or in the
                page's tab)
              </li>
              <li>
                The <span>{'<body>'}</span> element defines the document's body,
                and is a container for all the visible contents, such as
                headings, paragraphs, images, hyperlinks, tables, lists, etc.
              </li>
              <li>
                The <span>{'<h1>'}</span> element defines a large heading
              </li>
              <li>
                The <span>{'<p>'}</span> element defines a paragraph
              </li>
            </Styles.ListsDescription>
          </Styles.ContentBox>

          <Styles.ContentBox>
            <h4>What is an HTML Element</h4>
            <p>
              An HTML element is defined by a start tag, some content, and an
              end tag:
            </p>

            <p>
              <span>{'<tagname>'}</span> Content goes here...
              <span>{'</tagname>'}</span>
            </p>
            <p>
              The HTML <strong>element</strong> is everything from the start tag
              to the end tag:
            </p>

            <p>
              <span>{'<h1>'}</span> My First Heading <span>{'</h1>'}</span>
              <br />
              <span>{'<p>'}</span> My first paragraph <span>{'</p>'}</span>
            </p>

            <div>
              <img src={element1} alt='element' />
            </div>
          </Styles.ContentBox>

          <Styles.ContentBox>
            <h4>Web Browsers</h4>
            <p>
              The purpose of a web browser (Chrome, Edge, FireFox, Safari) is to
              read HTML documents and display them correctly.
              <br />A browser does not display the HTML tags, but uses them to
              determine how to display the document:
            </p>

            <div>
              <img src={element2} alt='element' />
            </div>
          </Styles.ContentBox>

          <Styles.ContentBox>
            <h4>HTML Page Structure</h4>
            <p>Below is a visualization of an HTML page structure:</p>

            <div>
              <img src={element3} alt='element' />
            </div>
          </Styles.ContentBox>
        </div>
      </Styles.Container>
    </div>
  );
};

export default HtmlIntroduction;
