import React from 'react'
import { Flex, Image, Heading, Code } from '@chakra-ui/core'
import images from '../../theme/images'

type Props = {
  children: React.ReactElement
}

type State = {
  error?: Error
  errorInfo?: React.ErrorInfo
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: undefined, errorInfo: undefined }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Flex flex={1} flexDirection="column" justifyContent="center" alignItems="center">
          <Image src={images.warning} width={350} height={350} />
          <Heading textAlign="center" size="md" mt={4} fontWeight="lighter">
            An error has occurred.
          </Heading>
          {this.state.error && (
            <Code
              variantColor="red"
              children={
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              }
            />
          )}
        </Flex>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}
