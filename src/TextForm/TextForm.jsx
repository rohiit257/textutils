import React, { useRef, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';






function TextArea(props) {
    const [text,Settext] = useState("Computer Science is a dynamic field that explores the theory and application of computation. It encompasses diverse areas such as algorithms, artificial intelligence, data structures, and software development. Computer scientists design innovative solutions to complex problems, pushing the boundaries of technology. From developing cutting-edge software to understanding the intricacies of machine learning, Computer Science plays a pivotal role in shaping the digital landscape of the modern world.")
    const [txtlabel] = useState("Enter Your Text")
    const textref = useRef(null)
    



    

    const Uppercase = ()=>{
        Settext(text.toUpperCase())
        props.Showalert("Text is Converted to UPPERCASE.....","success")


    
    }

    const Lowercase = ()=>{
        Settext(text.toLowerCase())
        props.Showalert("Text is Converted to lowercase.....","success")

    
    }

    const removespaces = ()=>{
        Settext(text.split(' ').join(''))
        props.Showalert("Spaces Removed From Text.....","success")


    }

    const Uponchange=(event)=>{
        Settext(event.target.value)


    }

    const handleDownloadClick = () => {
        // Create a Blob with the text content
        const blob = new Blob([text], { type: 'text/plain' });
        
        // Create a download link and trigger a click to start the download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'text.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        props.Showalert("Download Will Start Soon.....","info")

      };

    const clear = ()=>{
        Settext("")
        props.Showalert("Text Cleared.","warning")
    }

    const copytoclipboard = ()=>{
      textref.current?.select()
      window.navigator.clipboard.writeText(text)
      props.Showalert("Text Copied To ClipBoard","info")
      console.log("hello")
    }





   

    

  return (
    
    <>
      
      <FloatingLabel controlId="floatingTextarea2" className='my-4'label={txtlabel}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
          value={text}
          onChange={Uponchange}
          ref={textref}
        />
      </FloatingLabel>
      <Button className='btn' variant="outline-primary" onClick={Uppercase}>UpperCase</Button>{' '}
      <Button className='btn' variant="outline-primary" onClick={Lowercase}>LowerCase</Button>{' '}
      <Button className='btn' variant="outline-primary" onClick={removespaces}>Remove Spaces</Button>{' '}
      <Button className='btn' variant="outline-primary" onClick={handleDownloadClick}>Download Text</Button>{' '}
      <Button className='btn' variant="outline-primary" onClick={clear}>Clear</Button>{' '}
      <Button className='btn' variant="outline-primary" onClick={copytoclipboard}>Copy Text</Button>{' '}

      <div className="container my-5">
        
        <Card>
      <Card.Header>Preview <p className='my-4'>{text.split(" ").length} Words And {text.length} Characters</p></Card.Header>
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>

    </>
  )
}

export default TextArea
