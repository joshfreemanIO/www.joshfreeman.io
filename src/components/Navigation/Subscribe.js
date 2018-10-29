import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { observer} from 'mobx-react'
import { types } from 'mobx-state-tree'

const url = "//joshfreeman.us19.list-manage.com/subscribe/post-json?u=32e66da2ca4af2c72e46282ed&id=2279bb6428";

const Subscribe = () => {
  let email;

  if (uimodel.closed) {
    return <a className="subscribe-link" onClick={uimodel.open}>Subscribe</a>
  }

  return (
      <MailchimpSubscribe url={url} render={({ subscribe, status, message }) => (
        <div>
          {status === 'error' && <p className="subscribe-error" >{message}</p>}
          <div className="subscribe-wrapper">
            <input ref={node => (email = node)} type="text" id="subscribe" className="subscribe-input" name="email" placeholder="Email"/>

            <button className={`subscribe-button ${status}`} onClick={() => subscribe({EMAIL: email.value})}>
              {{
                'sending': 'Sending...',
                'error': 'Resubmit?',
                'success': 'Success!'
              }[status] || 'Submit'}
            </button>
          </div>
        </div>
      )} />
  )
}

const uimodel = types
  .model()
  .props({
    email: '',
    message: '',
    closed: true
  })
  .actions(self => ({
    open() {
      self.closed = false
    }
  }))
  .create({})

export default observer(Subscribe)
