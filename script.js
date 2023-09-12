const userCountSlider = document.getElementById('userCountSlider');
        const selectedUserCount = document.getElementById('selectedUserCount');
        const subscriptionPlans = document.querySelectorAll('.subscription-plan');
    
        userCountSlider.addEventListener('input', () => {
            const userCount = parseInt(userCountSlider.value);
            selectedUserCount.textContent = userCount;
    
            subscriptionPlans.forEach(plan => {
                const minUsers = parseInt(plan.getAttribute('data-min-users'));
                const maxUsers = parseInt(plan.getAttribute('data-max-users'));
    
                if (userCount >= minUsers && userCount <= maxUsers) {
                    plan.style.display = 'block';
                } else {
                    plan.style.display = 'none';
                }
            });
        });