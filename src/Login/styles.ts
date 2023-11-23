import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  header: {
    width: '100%',
  },
  headerTextLogin: {
    fontSize: 25,
    color: '#0F1111',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  headerTextDescription: {
    color: '#AAABAB',
    paddingBottom: 40,
  },
  inputContainer: {
    width: '100%',
  },
  inputText: {
    color: '#0F1111',
    fontSize: 16,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#AAABAB',
  },
  btnBackground: {
    width: '100%',
  },
  btnSend: {
    backgroundColor: '#F9C055',
    alignSelf: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ball: {
    backgroundColor: '#F9C055',
    height: 200,
    width: 200,
    borderRadius: 100,
    marginEnd: -100,
    marginTop: -280,
  },
  styleBall: {
    alignSelf: 'flex-end',
  },
  boxLogin: {
    width: '90%',
    marginTop: '10%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    color: '#AAABAB',
  },
  textLogin: {
    textAlign: 'center',
    color: '#AAABAB',
    fontSize: 18,
  },
  status: {
    color: '#000',
    fontSize: 18,
    marginTop: '10%',
  },
});
