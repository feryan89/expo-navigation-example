/* @flow */
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Paragraph, Title, Divider, withTheme } from 'react-native-paper'
import type { Theme } from 'react-native-paper/types'

// app components
import { Button } from '../../components/button'

// styling
import { styles } from '../../styles'

type Props = {
  theme: Theme,
  navigation: any,
}

class About extends React.Component<Props> {
  static navigationOptions = {
    title: 'About',
  }

  styles = StyleSheet.create({
    button: {
      marginTop: 20,
    },
  })

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props

    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <Title>About</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Paragraph>
        <Divider />
        <Button
          style={this.styles.button}
          mode="contained"
          onPress={() => this.props.navigation.navigate('Main.Home')}
        >
          Open Home
        </Button>
        <Divider />
        <Button
          style={this.styles.button}
          mode="contained"
          onPress={() => this.props.navigation.navigate('NotAuthenticated')}
        >
          Back to Login
        </Button>
      </View>
    )
  }
}

export default withTheme(About)
