import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { observer} from 'mobx-react'
import { types } from 'mobx-state-tree'
import styled from 'styled-components'

const url = "//joshfreeman.us19.list-manage.com/subscribe/post-json?u=32e66da2ca4af2c72e46282ed&id=2279bb6428";

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const SubscribeButton = styled.button`
  flex-shrink: 0;
  width: 110px;
  border: none;
  border: 1px solid ${props => props.theme.colors.gray};
  border-left: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  font-weight: bold;
  color: white;
  background-color: ${props => props.theme.colors.gray};
  font-size: 20px;
  transition: background-color 0.1s;

  &.sending {
    background-color: SteelBlue;
    font-size: 16px;
    line-height: 16px;
  }

  &.error {
    background-color: firebrick;
    font-size: 16px;
    line-height: 16px;
  }

  &.success {
    background-color: ForestGreen;
  }
`

const Input = styled.input`
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border: 1px solid ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.scales.scale5};

  &:focus, &:focus + .subscribe-button {
    box-shadow: 0 0 4px 2px rgba(100, 100, 100, 0.5);
  }
`

const SubscribeLink = styled.a`
  align-self: flex-end;
  cursor: pointer;
`

const Error = styled.p`
  color: crimson;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`

const Subscribe = () => {
  let email;

  if (uimodel.closed) {
    return <SubscribeLink onClick={uimodel.open}>Subscribe</SubscribeLink>
  }

  return (
      <MailchimpSubscribe url={url} render={({ subscribe, status, message }) => (
        <div>
          {status === 'error' && <Error>{message}</Error>}

          <SubscribeWrapper>
            <Input ref={node => (email = node)} type="text" id="subscribe" name="email" placeholder="Email" />

            <SubscribeButton className={status} onClick={() => subscribe({EMAIL: email.value})}>
              {{
                'sending': 'Sending...',
                'error': 'Resubmit?',
                'success': 'Success!'
              }[status] || 'Submit'}
            </SubscribeButton>
          </SubscribeWrapper>
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
