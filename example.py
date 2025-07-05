user = {
    'name': 'John Doe',
    'profile': {
        'email': 'john.doe@example.com'
    }
}

# Risky way – can raise KeyError
email = user['profile']['email']

# Safer, cleaner way using .get()
email = user.get('profile', {}).get('email')
print(email)  # Outputs email or None

