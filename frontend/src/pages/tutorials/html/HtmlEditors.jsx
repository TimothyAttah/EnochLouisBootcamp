import React from 'react';
import HtmlTutorialLists from './HtmlTutorialLists';
import * as Styles from './HtmlStyles';
import editor1 from '../../../assets/editor1.png';
import editor2 from '../../../assets/editor2.png';
import editor3 from '../../../assets/editor3.png';

const HtmlEditors = () => {
  return (
    <div className='mt-5'>
      <Styles.Container>
        <HtmlTutorialLists />
        <div>
          <h1>HTML Editors</h1>
          <Styles.TopDescription>
            A simple text editor is all you need to learn HTML.
          </Styles.TopDescription>

          <div>
            <h2>Learn HTML Using Notepad or TextEdit</h2>

            <p>
              Web pages can be created and modified by using professional HTML
              editors. <br />
              However, for learning HTML we recommend a simple text editor like
              Notepad (PC) or TextEdit (Mac). <br />
              We believe that using a simple text editor is a good way to learn
              HTML. <br />
              Follow the steps below to create your first web page with Notepad
              or TextEdit.
            </p>
          </div>
          <div>
            <h2>Step 1: Open Notepad (PC)</h2>
            <p>
              <strong>Windows 8 or later:</strong>
              <br />
              Open the <strong>Start Screen</strong> (the window symbol at the
              bottom left on your screen). Type <strong>Notepad</strong>
              <br />
              <strong>Windows 7 or earlier:</strong>
              <br />
              Open <strong>Start</strong> {'>'} <strong>Programs</strong> {'>'}{' '}
              Accessories {'>'} <strong>Notepad</strong>
            </p>
          </div>
          <div>
            <h2>Step 1: Open TextEdit (MAC)</h2>
            <p>
              Open <strong>Finder</strong> {'>'} <strong>Applications</strong>{' '}
              {'>'}
              TextEdit
              <br />
              Also change some preferences to get the application to save files
              correctly. In{' '}
              <strong>
                Preferences {'>'} Format {'>'}
              </strong>{' '}
              choose <strong>"Plain Text"</strong>
              <br />
              Then under "Open and Save", check the box that says "Display HTML
              code instead of formatted text".
              <br />
              <strong>Then open a new document to place the code.</strong>
            </p>
          </div>

          <div>
            <h2>Step 2: Write Some HTML</h2>
            <p>Write or copy the following HTML code into Notepad:</p>

            <Styles.ExampleBox>
              <p>
                <span>{'<!DOCTYPE html>'}</span>
                <br />
                <span>{'<html lang="en">'}</span>
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

            <div>
              <img src={editor1} alt='editor' />
            </div>
          </div>

          <div>
            <h2>Step 3: Save the HTML Page</h2>
            <p>
              Save the file on your computer. Select{' '}
              <strong>File {'>'} Save as</strong> in the Notepad menu.
            </p>
            <p>
              Name the file <strong>"index.html"</strong> and set encoding to{' '}
              <strong>UTF-8</strong> (which is the preferred encoding for the
              HTML files).
            </p>

            <div>
              <img src={editor2} alt='editor' />
            </div>
          </div>

          <div>
            <h2>Step 4: View the HTML Page in Your Browser</h2>
            <p>
              Open the saved HTML file in your favorite browser (double click on
              the file, or right-click - and choose "Open with").
            </p>
            <p>The result will look much like this:</p>

            <div>
              <img src={editor3} alt='editor' />
            </div>
          </div>
        </div>
      </Styles.Container>
    </div>
  );
};

export default HtmlEditors;
