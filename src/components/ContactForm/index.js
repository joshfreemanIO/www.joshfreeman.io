import React from 'react'
import { observer } from 'mobx-react'
import { types } from 'mobx-state-tree'
import styled, {css} from 'styled-components'

const ContactForm = types
  .model({
    name: '',
    email: '',
    comments: '',
    submitted: false
  })
  .actions(self => ({
    update(event) {
      self[event.target.name] = event.target.value
    },
    clear() {
      self.name = ''
      self.email = ''
      self.comments = ''
      self.submitted = false
    },
    submit() {
      const formData = new FormData();

      formData.append('name', self.name)
      formData.append('email', self.email)
      formData.append('comments', self.comments)

      fetch('https://www.elformo.com/forms/88d8d7db-217c-4062-b468-d532204be2b6', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
        .then(self.formSucceeded)
    },
    formSucceeded() {
      self.clear()
      self.submitted = true
    }
  }))

const form = ContactForm.create()

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
  flex-shrink: 0;

  label {
    font-weight: bold;
    color: ${props => props.theme.colors.gray};
    text-decoration: none;
  }

  &.half {
    max-width: 47.5%;

    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
`

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const FormElement = css`
  border: 1px solid ${props => props.theme.colors.black};
  flex-grow: 1;
  width: 100%;
  font-size: ${props => props.theme.scales.scale6};
  padding: 6px 12px;
  outline: none;
  line-height: 1.25;

`

const Input = styled.input`
  ${FormElement};
  height: 42px;
  padding: 6px;
  width: 100%;
`

const TextArea = styled.textarea`
  ${FormElement};
  height: 84px;
`

const Button = styled.button`
  ${FormElement};
  &:hover {
    cursor: pointer;
  }
`

const Label = styled.label`
  cursor: pointer;
  margin-bottom: 15px;
`

const Form = () => (
  <>
    <InputRow>
      <InputGroup className="half">
        <Label htmlFor="input-name">Name</Label>
        <Input id="input-name" type="text" name="name" placeholder="Your name" onChange={form.update} value={form.name} />
      </InputGroup>

      <InputGroup className="half">
        <Label htmlFor="input-email">Email</Label>
        <Input id="input-email" type="text" className="subscribe-input" name="email" placeholder="your@email.com" onChange={form.update} value={form.email} />
      </InputGroup>
    </InputRow>

    <InputGroup>
      <Label htmlFor="input-comments">Question or Comments</Label>
      <TextArea id="input-comments" onChange={form.update} name="comments" value={form.comments} ></TextArea>
    </InputGroup>

    { form.submitted === false &&
      <InputGroup>
        <Button onClick={form.submit}>Submit</Button>
      </InputGroup>
    }

   { form.submitted &&
      <p className="center">Thanks for starting a conversation. Need to <span onClick={form.clear} className="link-text">start another</span>?</p>
    }
  </>
)

export default observer(Form)
