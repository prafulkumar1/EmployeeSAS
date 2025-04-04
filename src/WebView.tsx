import React, { Component } from 'react';
import { View, Button, SafeAreaView, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

class WebViewScreen extends Component<any,any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      showWebView: false,
      url: "",
      urlError: null,
    };
  }

  validateAndOpenWebView = () => {
    const { url } = this.state;
    
    if (!url.trim()) {
      this.setState({ urlError: 'Please enter a URL' });
      return;
    }
    
    this.setState({url:url,urlError:null},() => {
      this.openWebView();
    })
  };

  openWebView = () => {
    this.setState({ showWebView: true });
  };

  handleBack = () => {
    this.setState({ showWebView: false });
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.showWebView ? (
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
              <Text style={styles.title}>Web Browser</Text>
              
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => this.setState({url: text})}
                  value={this.state.url}
                  placeholder="Enter website URL"
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                />
                {this.state.urlError && (
                  <Text style={styles.errorText}>{this.state.urlError}</Text>
                )}
              </View>
              
              <TouchableOpacity 
                style={styles.button} 
                onPress={this.validateAndOpenWebView}
              >
                <Text style={styles.buttonText}>Browse Website</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        ) : (
          <View style={styles.webViewContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={this.handleBack}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
            <WebView
              source={{ uri: this.state.url }}
              style={styles.webView}
              startInLoadingState={true}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  webViewContainer: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  backButton: {
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default WebViewScreen;