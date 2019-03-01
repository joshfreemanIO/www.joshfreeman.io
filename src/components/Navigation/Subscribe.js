import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { observer } from 'mobx-react'
import { types } from 'mobx-state-tree'
import styled from 'styled-components'
import Ripple from './Ripple'

const url = '//joshfreeman.us19.list-manage.com/subscribe/post-json?u=32e66da2ca4af2c72e46282ed&id=2279bb6428'

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
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.scales.scale5};
  flex-grow: 1;

  &:focus, &:focus + .subscribe-button {
    outline: none;
  }
`

const SubscribeLink = styled.a`
  align-self: flex-end;
  justify-self: flex-end;
  margin-bottom: 28px;
  position: relative;
  cursor: pointer;
`

const Error = styled.p`
  color: crimson;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;

  .form {
    height: 0;
    opacity: 0;
    display: none;
    transition: 0.2s
  }

  .form.active {
    height: auto;
    opacity: 1;
  }
`

const Form = styled.div`
  height: 0;
  opacity: 0;
  transition: 0.35s;
  overflow: hidden;

  &.active {
    height: 40px;
    opacity: 1;
  }
`

const Subscribe = () => {
  let email

  return (
    <Container>
      <SubscribeLink onMouseEnter={uimodel.open}>
        <Ripple />
        Subscribe
      </SubscribeLink>

      <Form className={uimodel.isOpen ? 'active' : ''}>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (

            <SubscribeWrapper>
              {status === 'error' && <Error>{message}</Error>}
              <Input ref={node => (email = node)} type="text" id="subscribe" name="email" placeholder="Email" />

              <SubscribeButton className={status} onClick={() => subscribe({ EMAIL: email.value })}>
                {{
                  sending: 'Sending...',
                  error: 'Resubmit?',
                  success: 'Success!'
                }[status] || 'Submit'}
              </SubscribeButton>
            </SubscribeWrapper>
          )}
        />
      </Form>
    </Container>
  )
}

const uimodel = types
  .model()
  .props({
    email: '',
    message: '',
    isOpen: false
  })
  .actions(self => ({
    open() {
      self.isOpen = true
    }
  }))
  .create({})

export default observer(Subscribe)
