import { StyleSheet } from 'react-native';

/**
 * Students: create all your styles here.
 * Updated with cleaner layout, modern colors, and better readability.
 */

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F7',
    padding: 24,
  },

  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 20,
    textAlign: 'center',
  },

  section: {
    marginVertical: 18,
    padding: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2C2C2C',
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E3E3E3',
  },

  itemName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },

  counter: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0066CC',
    marginHorizontal: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#BBB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },

  button: {
    backgroundColor: '#0066CC',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
