import React from 'react'
import { observer } from 'mobx-react'
import { types, getSnapshot } from 'mobx-state-tree'

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

const Form = () => (
  <>
    <div className="input-row">
      <div className="input-group half">
        <label htmlFor="input-name">Name</label>
        <input id="input-name" type="text" className="subscribe-input" name="name" placeholder="Your name" onChange={form.update} value={form.name} />
      </div>

      <div className="input-group half">
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="text" className="subscribe-input" name="email" placeholder="your@email.com" onChange={form.update} value={form.email} />
      </div>
    </div>

    <div className="input-group">
      <label htmlFor="input-comments">Question or Comments</label>
      <textarea name="" id="input-comments" onChange={form.update} name="comments" value={form.comments} ></textarea>
    </div>

    { form.submitted === false &&
      <div className="input-group">
        <button onClick={form.submit}>Submit</button>
      </div>
    }

   { form.submitted &&
      <p className="center">Thanks for starting a conversation. Need to <span onClick={form.clear} className="link-text">start another</span>?</p>
    }
  </>
)

export default observer(Form)
