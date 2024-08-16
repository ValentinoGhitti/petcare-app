export default () => ({
  isAuthenticated: !!localStorage.getItem('authToken'),
  user: JSON.parse(localStorage.getItem('user')) || null,
  users: JSON.parse(localStorage.getItem('users')) || [],

  selectedChart: 'stressLevel',
  chartData: {
    stressLevel: [1, 1.5, 2.2, 1.6, 2.8, 2.5, 2.9, 1.9, 1.9, 1.9, 2, 2.4, 3.5, 2.6, 3.9, 5, 6, 5, 4.2, 4, 3.4, 2.9, 1.8, 2, 2.4, 3.3],
    pulse: [2, 2.5, 3.2, 3.6, 3.8, 3.5, 1.9, 4.9, 9.9, 5.9, 6, 6.4, 7.5, 6.6, 7.9, 8, 9, 8, 7.2, 6, 5.4, 4.9, 4.8, 5, 5.4, 6.3],
    temperature: [2, 2.5, 3.2, 3.6, 3.8, 3.5, 3.9, 4.9, 4.9, 5.9, 6, 6.4, 7.5, 2.6, 7.9, 7, 3, 10, 1.2, 6, 5.4, 4.9, 4.8, 7, 1.4, 2.3],
    caloriesBurned: [2, 2.5, 3.2, 3.6, 3.8, 3.5, 3.9, 4.9, 4.9, 5.9, 6, 6.4, 7.5, 6.6, 7.9, 8, 9, 8, 7.2, 6, 5.4, 4.9, 4.8, 5, 5.4, 6.3],
  },

  selectedChartStat: 'ACTIVITY',
  statCardData: {
    'ACTIVITY': { Daily: 25, Weekly: 30, Monthly: 35 },
    'SLEEP': { Daily: 79, Weekly: 70, Monthly: 65 },
    'WELNESS': { Daily: 52, Weekly: 55, Monthly: 60 },
  },

  selectedType: 'All',
  vaccinations: [
    { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023', veterinarian: null, menu: false },
    { name: 'Bordetella', type: 'Noncore', date: '11 Dec 2024', veterinarian: 'James Grey', menu: false },
    { name: 'Distemper', type: 'Core', date: '27 Jun 2024', veterinarian: 'Jim Brown', menu: false },
    { name: 'Calicivirus', type: 'Core', date: '16 Sep 2024', veterinarian: 'Helen Brooks', menu: false }
  ],
  veterinarians: [
    { name: 'James Grey' },
    { name: 'Jim Brown' },
    { name: 'Helen Brooks' },
    { name: 'Dr. Smith' },
    { name: 'Dr. Taylor' },
    { name: 'Dr. Adams' },
  ]
})