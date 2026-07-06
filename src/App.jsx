import './App.css'
import { useState } from 'react'

const stats = [
  { value: '2,400+', label: 'Landlords onboarded' },
  { value: '41,000+', label: 'Units managed' },
  { value: '₦12.8B+', label: 'Rent collected' },
  { value: '98.2%', label: 'Collection rate' },
]

const features = [
  {
    title: 'Nomba Virtual Accounts',
    description: 'Each tenant gets a dedicated virtual account. Payments post automatically, zero manual reconciliation.',
  },
  {
    title: 'Instant Notifications',
    description: 'Real-time alerts for every payment, missed rent, or account event — SMS, email, and in-app.',
  },
  {
    title: 'Bank-Grade Security',
    description: 'End-to-end encryption, 2FA, and audit trails on every transaction. Your money is safe.',
  },
  {
    title: 'Analytics & Reports',
    description: 'Live dashboards for occupancy, revenue trends, and overdue analysis — exported in one click.',
  },
  {
    title: 'Multi-Property Support',
    description: 'Manage unlimited properties, units, and tenants from a single workspace.',
  },
  {
    title: 'Auto-Generated Receipts',
    description: 'Professional PDF receipts sent automatically after every successful payment.',
  },
]

const steps = [
  { num: '01', title: 'Add your properties', desc: 'Create properties and units in the dashboard.' },
  { num: '02', title: 'Invite tenants', desc: 'Tenants receive a link to complete their profile.' },
  { num: '03', title: 'VAs auto-created', desc: 'Nomba generates a unique account per tenant instantly.' },
  { num: '04', title: 'Collect automatically', desc: 'Payments post, receipts send — zero manual work.' },
]

const plans = [
  {
    name: 'Starter',
    price: '₦9,900',
    period: '/month',
    units: 'Up to 20 units',
    features: ['Virtual accounts', 'Payment history', 'Email notifications', 'Basic reports'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    price: '₦24,900',
    period: '/month',
    units: 'Up to 100 units',
    features: ['Everything in Starter', 'SMS notifications', 'Caretaker portal', 'Advanced analytics', 'Priority support'],
    cta: 'Get Started',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    units: 'Unlimited units',
    features: ['Everything in Growth', 'Dedicated account manager', 'API access', 'White-label option', 'SLA guarantee'],
    cta: 'Contact Sales',
  },
]

function App() {
  const [currentPage, setCurrentPage] = useState('landing') // 'landing', 'login', 'dashboard', 'signup'
  const [userType, setUserType] = useState('Landlord')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('Dashboard')

  // Search & Filter States
  const [propertySearch, setPropertySearch] = useState('')
  const [unitFilter, setUnitFilter] = useState('All')
  const [tenantSearch, setTenantSearch] = useState('')
  const [paymentSearch, setPaymentSearch] = useState('')
  const [paymentFilter, setPaymentFilter] = useState('All')
  const [reportsFilter, setReportsFilter] = useState('Monthly')
  const [settingsTab, setSettingsTab] = useState('Profile')

  // Profile Settings States
  const [profileFirstName, setProfileFirstName] = useState('Kunle')
  const [profileLastName, setProfileLastName] = useState('Adeyemi')
  const [profileEmail, setProfileEmail] = useState('kunle.adeyemi@gmail.com')
  const [profilePhone, setProfilePhone] = useState('08023456789')
  const [profileCompany, setProfileCompany] = useState('Adeyemi Properties Ltd')
  const [profileAddress, setProfileAddress] = useState('Lagos, Nigeria')
  const [showSaveToast, setShowSaveToast] = useState(false)

  // Caretaker Tasks State
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Fix leaking pipe', priority: 'High', unit: 'Flat 2B', property: 'Lekki Heights', date: '2024-07-01', status: 'Open' },
    { id: 2, title: 'Replace broken window', priority: 'Medium', unit: 'Suite 102', property: 'Victoria Court', date: '2024-06-28', status: 'In Progress' },
    { id: 3, title: 'Paint common area walls', priority: 'Low', unit: 'Common', property: 'Obada Plaza', date: '2024-06-25', status: 'Open' },
    { id: 4, title: 'Generator servicing', priority: 'High', unit: 'All units', property: 'Lekki Heights', date: '2024-06-20', status: 'Completed' }
  ]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('High');
  const [newTaskUnit, setNewTaskUnit] = useState('Flat 1B');
  const [newTaskProperty, setNewTaskProperty] = useState('Lekki Heights');

  // Copy feedback state
  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 1500)
  };

  const handleSaveSettings = (e) => {
    e.preventDefault()
    setShowSaveToast(true)
    setTimeout(() => setShowSaveToast(false), 3000)
  };

  // Properties Data State
  const [properties] = useState([
    {
      id: 1,
      name: 'Lekki Heights Estate',
      address: '14 Admiralty Way, Lekki Phase 1',
      tag: 'Residential',
      units: 12,
      occupied: 10,
      revenue: '₦2.4M',
      occupancy: 83,
    },
    {
      id: 2,
      name: 'Victoria Court',
      address: '3 Bourdillon Road, Ikoyi',
      tag: 'Luxury',
      units: 8,
      occupied: 8,
      revenue: '₦3.2M',
      occupancy: 100,
    },
    {
      id: 3,
      name: 'Surulere Plaza',
      address: '45 Bode Thomas Street, Surulere',
      tag: 'Commercial',
      units: 6,
      occupied: 4,
      revenue: '₦0.72M',
      occupancy: 67,
    },
    {
      id: 4,
      name: 'Gbagada Green',
      address: '22 Gospel Street, Gbagada',
      tag: 'Residential',
      units: 20,
      occupied: 17,
      revenue: '₦1.7M',
      occupancy: 85,
    }
  ])

  // Units Data State
  const [units] = useState([
    { id: 1, unit: 'Flat 1A', property: 'Lekki Heights Estate', type: '2-Bed Apartment', tenant: 'Emeka Okafor', rent: '₦200,000', dueDate: '2024-08-01', status: 'Occupied' },
    { id: 2, unit: 'Flat 1B', property: 'Lekki Heights Estate', type: '2-Bed Apartment', tenant: 'Ngozi Adeyemi', rent: '₦200,000', dueDate: '2024-07-15', status: 'Occupied' },
    { id: 3, unit: 'Flat 2A', property: 'Lekki Heights Estate', type: '3-Bed Apartment', tenant: '—', rent: '₦280,000', dueDate: '—', status: 'Vacant' },
    { id: 4, unit: 'Suite 101', property: 'Victoria Court', type: 'Penthouse', tenant: 'Babajide Sanwo', rent: '₦400,000', dueDate: '2024-08-10', status: 'Occupied' },
    { id: 5, unit: 'Suite 102', property: 'Victoria Court', type: '3-Bed Apartment', tenant: 'Chiamaka Eze', rent: '₦350,000', dueDate: '2024-07-28', status: 'Occupied' },
    { id: 6, unit: 'Shop A1', property: 'Surulere Plaza', type: 'Commercial', tenant: 'TechHub Ltd', rent: '₦180,000', dueDate: '2024-06-30', status: 'Overdue' }
  ])

  // Tenants Data State
  const [tenants] = useState([
    {
      id: 1,
      name: 'Emeka Okafor',
      email: 'emeka.okafor@gmail.com',
      initials: 'EO',
      unit: 'Flat 1A',
      property: 'Lekki Heights Estate',
      rent: '₦200,000 per month',
      balance: 'Clear outstanding',
      balanceType: 'clear',
      status: 'Current',
      statusDate: 'Since 2023-02-01'
    },
    {
      id: 2,
      name: 'Ngozi Adeyemi',
      email: 'ngozi.a@yahoo.com',
      initials: 'NA',
      unit: 'Flat 1B',
      property: 'Lekki Heights Estate',
      rent: '₦200,000 per month',
      balance: '₦200,000 outstanding',
      balanceType: 'outstanding',
      status: 'Due',
      statusDate: 'Since 2022-08-15'
    },
    {
      id: 3,
      name: 'Babajide Sanwo',
      email: 'bj.sanwo@outlook.com',
      initials: 'BS',
      unit: 'Suite 101',
      property: 'Victoria Court',
      rent: '₦400,000 per month',
      balance: 'Clear outstanding',
      balanceType: 'clear',
      status: 'Current',
      statusDate: 'Since 2023-05-01'
    },
    {
      id: 4,
      name: 'Chiamaka Eze',
      email: 'chiamaka.eze@gmail.com',
      initials: 'CE',
      unit: 'Suite 102',
      property: 'Victoria Court',
      rent: '₦350,000 per month',
      balance: 'Clear outstanding',
      balanceType: 'clear',
      status: 'Current',
      statusDate: 'Since 2021-11-20'
    },
    {
      id: 5,
      name: 'TechHub Ltd',
      email: 'admin@techhub.ng',
      initials: 'TL',
      unit: 'Shop A1',
      property: 'Surulere Plaza',
      rent: '₦180,000 per month',
      balance: '₦540,000 outstanding',
      balanceType: 'overdue',
      status: 'Overdue',
      statusDate: 'Since 2022-01-05'
    }
  ])

  // Virtual Accounts Data State
  const [virtualAccounts] = useState([
    {
      id: 1,
      tenant: 'Emeka Okafor',
      ref: 'RAAS-T001-P001',
      accountNumber: '9038421765',
      bank: 'Nomba / Wema Bank',
      pendingBalance: '₦0',
      totalCollected: '₦2,400,000',
      status: 'Active'
    },
    {
      id: 2,
      tenant: 'Ngozi Adeyemi',
      ref: 'RAAS-T002-P001',
      accountNumber: '9038421766',
      bank: 'Nomba / Wema Bank',
      pendingBalance: '₦200,000',
      totalCollected: '₦1,600,000',
      status: 'Active'
    },
    {
      id: 3,
      tenant: 'Babajide Sanwo',
      ref: 'RAAS-T003-P002',
      accountNumber: '9038421770',
      bank: 'Nomba / Wema Bank',
      pendingBalance: '₦0',
      totalCollected: '₦4,800,000',
      status: 'Active'
    },
    {
      id: 4,
      tenant: 'Chiamaka Eze',
      ref: 'RAAS-T004-P002',
      accountNumber: '9038421771',
      bank: 'Nomba / Wema Bank',
      pendingBalance: '₦0',
      totalCollected: '₦8,750,000',
      status: 'Active'
    },
    {
      id: 5,
      tenant: 'TechHub Ltd',
      ref: 'RAAS-T005-P003',
      accountNumber: '9038421780',
      bank: 'Nomba / Wema Bank',
      pendingBalance: '₦0',
      totalCollected: '₦1,620,000',
      status: 'Suspended'
    }
  ])

  // Payments Data State
  const [payments] = useState([
    { ref: '-7821934', tenant: 'Emeka Okafor', propertyUnit: 'Flat 1A', amount: '₦200,000', date: '2024-07-02', method: 'Virtual Account', status: 'Successful' },
    { ref: '-7821800', tenant: 'Babajide Sanwo', propertyUnit: 'Suite 101', amount: '₦400,000', date: '2024-07-01', method: 'Virtual Account', status: 'Successful' },
    { ref: '-7819450', tenant: 'Chiamaka Eze', propertyUnit: 'Suite 102', amount: '₦350,000', date: '2024-06-28', method: 'Virtual Account', status: 'Successful' },
    { ref: '-7815200', tenant: 'Ngozi Adeyemi', propertyUnit: 'Flat 1B', amount: '₦200,000', date: '2024-06-15', method: 'Virtual Account', status: 'Pending' },
    { ref: '-7800100', tenant: 'TechHub Ltd', propertyUnit: 'Shop A1', amount: '₦180,000', date: '2024-05-30', method: 'Virtual Account', status: 'Failed' },
    { ref: '-7810500', tenant: 'Emeka Okafor', propertyUnit: 'Flat 1A', amount: '₦200,000', date: '2024-06-02', method: 'Virtual Account', status: 'Successful' }
  ])

  // Notifications State
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Rent Collected', message: '₦200,000 paid by Emeka Okafor for Flat 1A via virtual account.', time: '2 hours ago', type: 'success' },
    { id: 2, title: 'Rent Due Soon', message: "Ngozi Adeyemi's rent for Flat 1B is due in 9 days.", time: '1 day ago', type: 'warning' },
    { id: 3, title: 'Settlement Completed', message: '₦1,850,000 has been cleared and settled to your bank account.', time: '2 days ago', type: 'info' },
    { id: 4, title: 'Defaulter Warning', message: "TechHub Ltd's rent for Shop A1 is overdue by 6 days.", time: '3 days ago', type: 'danger' }
  ])

  const dashboardStats = [
    { label: 'Total Revenue (Jul)', value: '₦8,020,000', change: '+12.4%', changeType: 'positive', icon: '📈' },
    { label: 'Occupancy Rate', value: '84.8%', change: '+2.1%', changeType: 'positive', icon: '🏢' },
    { label: 'Overdue Balance', value: '₦540,000', change: '↑150K', changeType: 'negative', icon: '⚠️' },
    { label: 'Total Units', value: '46', change: '10 vacant', changeType: 'neutral', icon: '🏠' },
  ]

  const recentPayments = [
    { tenant: 'Emeka Okafor', property: 'Flat 1A', amount: '₦200,000', date: '2024-07-02', status: 'Successful' },
    { tenant: 'Babajide Sanwo', property: 'Suite 101', amount: '₦400,000', date: '2024-07-01', status: 'Successful' },
    { tenant: 'Chiamaka Eze', property: 'Suite 102', amount: '₦350,000', date: '2024-06-28', status: 'Successful' },
    { tenant: 'Ngozi Adeyemi', property: 'Flat 1B', amount: '₦200,000', date: '2024-06-15', status: 'Pending' },
  ]

  const navItems = [
    { label: 'Dashboard', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg> },
    { label: 'Properties', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /><path d="M9 21V9a3 3 0 0 1 6 0v12" /><line x1="9" y1="5" x2="9" y2="5.01" /><line x1="15" y1="5" x2="15" y2="5.01" /><line x1="9" y1="9" x2="9" y2="9.01" /><line x1="15" y1="9" x2="15" y2="9.01" /></svg> },
    { label: 'Units', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
    { label: 'Tenants', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { label: 'Virtual Accounts', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg> },
    { label: 'Payment History', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
    { label: 'Reports', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
    { label: 'Notifications', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>, badge: true },
    { label: 'Settings', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
  ]

  // Render Sub-Views
  const renderProperties = () => {
    const filteredProperties = properties.filter(p => 
      p.name.toLowerCase().includes(propertySearch.toLowerCase()) || 
      p.address.toLowerCase().includes(propertySearch.toLowerCase())
    )

    return (
      <div className="properties-view animate-fade-in">
        <div className="view-header-controls">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search properties..." 
              value={propertySearch}
              onChange={(e) => setPropertySearch(e.target.value)}
            />
          </div>
          <div className="header-actions-right">
            <button className="btn-filter">
              <span className="filter-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </span>
              Filter
            </button>
            <button className="btn-add-new">+ Add Property</button>
          </div>
        </div>

        <div className="properties-grid animate-slide-up">
          {filteredProperties.map(p => (
            <div className="property-card" key={p.id}>
              <div className="property-image-container">
                <img src="/src/assets/property_house_keys.png" alt={p.name} className="property-img" />
                <span className={`property-tag ${p.tag.toLowerCase()}`}>{p.tag}</span>
              </div>
              <div className="property-body">
                <div className="property-info-header">
                  <h3>{p.name}</h3>
                  <button className="btn-card-menu">⋮</button>
                </div>
                <p className="property-address">
                  <span className="pin-icon">📍</span> {p.address}
                </p>
                <div className="property-metrics">
                  <div className="property-metric-col">
                    <span className="metric-label">Units</span>
                    <span className="metric-value">{p.units}</span>
                  </div>
                  <div className="property-metric-col">
                    <span className="metric-label">Occupied</span>
                    <span className="metric-value">{p.occupied}</span>
                  </div>
                  <div className="property-metric-col">
                    <span className="metric-label">Revenue</span>
                    <span className="metric-value">{p.revenue}</span>
                  </div>
                </div>
                <div className="property-occupancy-wrapper">
                  <div className="occupancy-label-row">
                    <span>Occupancy</span>
                    <span>{p.occupancy}%</span>
                  </div>
                  <div className="occupancy-progress-bar">
                    <div className="occupancy-progress-fill" style={{ width: `${p.occupancy}%` }}></div>
                  </div>
                </div>
                <div className="property-card-actions">
                  <button className="btn-card-action view" onClick={() => setActiveTab('Units')}>
                    <span className="action-icon-small">👁️</span> View Units
                  </button>
                  <button className="btn-card-action edit">
                    <span className="action-icon-small">✏️</span> Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProperties.length === 0 && (
            <div className="no-results-msg">No properties found matching your search.</div>
          )}
        </div>
      </div>
    )
  }

  const renderUnits = () => {
    const filteredUnits = units.filter(u => {
      if (unitFilter === 'All') return true
      return u.status === unitFilter
    })

    return (
      <div className="units-view animate-fade-in">
        <div className="view-header-controls">
          <div className="sub-tabs">
            {['All', 'Occupied', 'Vacant', 'Overdue'].map((tab) => (
              <button 
                key={tab} 
                className={`sub-tab ${unitFilter === tab ? 'active' : ''}`}
                onClick={() => setUnitFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="btn-add-new">+ Add Unit</button>
        </div>

        <div className="table-card animate-slide-up">
          <div className="table-responsive">
            <table className="custom-data-table">
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Tenant</th>
                  <th>Rent/Month</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredUnits.map(u => (
                  <tr key={u.id}>
                    <td className="bold-text">{u.unit}</td>
                    <td>{u.property}</td>
                    <td>{u.type}</td>
                    <td>{u.tenant}</td>
                    <td className="bold-text">{u.rent}</td>
                    <td>{u.dueDate}</td>
                    <td>
                      <span className={`status-pill ${u.status.toLowerCase()}`}>{u.status}</span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button className="btn-table-icon" title="View">👁️</button>
                        <button className="btn-table-icon" title="Edit">✏️</button>
                        <button className="btn-table-icon delete" title="Delete">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredUnits.length === 0 && (
                  <tr>
                    <td colSpan="8" className="empty-table-msg">No units found in this category.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderTenants = () => {
    const filteredTenants = tenants.filter(t => 
      t.name.toLowerCase().includes(tenantSearch.toLowerCase()) || 
      t.email.toLowerCase().includes(tenantSearch.toLowerCase()) ||
      t.property.toLowerCase().includes(tenantSearch.toLowerCase())
    )

    return (
      <div className="tenants-view animate-fade-in">
        <div className="view-header-controls">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search tenants..." 
              value={tenantSearch}
              onChange={(e) => setTenantSearch(e.target.value)}
            />
          </div>
          <button className="btn-add-new">+ Add Tenant</button>
        </div>

        <div className="tenants-list animate-slide-up">
          {filteredTenants.map(t => (
            <div className="tenant-card" key={t.id}>
              <div className="tenant-left">
                <div className="tenant-avatar-circle">
                  {t.initials}
                </div>
                <div className="tenant-profile-details">
                  <div className="tenant-name-row">
                    <h4>{t.name}</h4>
                    <span className="tenant-email">{t.email}</span>
                  </div>
                  <div className="tenant-property-info">
                    <span className="property-label-tag">Unit</span>
                    <span className="property-value-text">{t.unit}</span>
                    <span className="property-dot">•</span>
                    <span className="property-name-text">{t.property}</span>
                  </div>
                </div>
              </div>

              <div className="tenant-mid">
                <div className="tenant-rent-block">
                  <span className="block-label">Rent</span>
                  <span className="block-val bold">{t.rent}</span>
                </div>
                <div className="tenant-balance-block">
                  <span className="block-label">Balance</span>
                  <span className={`block-val balance-text ${t.balanceType}`}>
                    {t.balance}
                  </span>
                </div>
              </div>

              <div className="tenant-right">
                <div className="tenant-status-block">
                  <span className={`status-badge-custom ${t.status.toLowerCase()}`}>{t.status}</span>
                  <span className="status-date-text">{t.statusDate}</span>
                </div>
                <div className="tenant-action-buttons">
                  <button className="btn-tenant-action" title="Send Email">✉️</button>
                  <button className="btn-tenant-action" title="Call">📞</button>
                  <button className="btn-tenant-action" title="Edit">✏️</button>
                </div>
              </div>
            </div>
          ))}
          {filteredTenants.length === 0 && (
            <div className="no-results-msg">No tenants found matching your search.</div>
          )}
        </div>
      </div>
    )
  }

  const renderVirtualAccounts = () => {
    return (
      <div className="virtual-accounts-view animate-fade-in">
        <div className="va-banner">
          <div className="va-banner-left">
            <span className="va-banner-sub">Platform powered by</span>
            <span className="va-banner-badge">Nomba API v2</span>
            <div className="va-banner-stat">
              <span className="stat-num">5</span>
              <span className="stat-lbl">Active VAs</span>
            </div>
          </div>
          <div className="va-banner-center">
            <span className="stat-lbl">Total Collected</span>
            <span className="stat-num">₦19.71M</span>
          </div>
          <div className="va-banner-right">
            <span className="stat-lbl">Pending Settlement</span>
            <span className="stat-num">₦740,000</span>
          </div>
        </div>

        <div className="va-grid animate-slide-up">
          {virtualAccounts.map(va => (
            <div className={`va-card ${va.status.toLowerCase() === 'suspended' ? 'suspended' : ''}`} key={va.id}>
              <div className="va-card-header">
                <div className="va-card-title-group">
                  <h4>{va.tenant}</h4>
                  <span className="va-ref">{va.ref}</span>
                </div>
                <span className={`va-status-pill ${va.status.toLowerCase()}`}>{va.status}</span>
              </div>

              <div className="va-account-box">
                <div className="va-box-left">
                  <span className="va-box-label">Virtual Account Number</span>
                  <span className="va-box-num">{va.accountNumber}</span>
                  <span className="va-box-bank">{va.bank}</span>
                </div>
                <button 
                  className="btn-copy-va" 
                  onClick={() => handleCopy(va.accountNumber, va.id)}
                  title="Copy Account Number"
                >
                  {copiedId === va.id ? '✅ Copied' : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>

              <div className="va-metrics">
                <div className="va-metric-col">
                  <span className="va-metric-lbl">Pending Balance</span>
                  <span className="va-metric-val pending-color">{va.pendingBalance}</span>
                </div>
                <div className="va-metric-col">
                  <span className="va-metric-lbl">Total Collected</span>
                  <span className="va-metric-val">{va.totalCollected}</span>
                </div>
              </div>

              <div className="va-card-actions">
                <button className="btn-va-action refresh">
                  <span className="icon">🔄</span> Refresh
                </button>
                <button className="btn-va-action details">
                  <span className="icon">👁️</span> Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderPaymentHistory = () => {
    const filteredPayments = payments.filter(p => {
      const matchesSearch = p.tenant.toLowerCase().includes(paymentSearch.toLowerCase()) || 
                            p.ref.toLowerCase().includes(paymentSearch.toLowerCase()) ||
                            p.propertyUnit.toLowerCase().includes(paymentSearch.toLowerCase())
      
      if (paymentFilter === 'All') return matchesSearch
      return matchesSearch && p.status === paymentFilter
    })

    return (
      <div className="payment-history-view animate-fade-in">
        <div className="view-header-controls">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Search by tenant or reference..." 
              value={paymentSearch}
              onChange={(e) => setPaymentSearch(e.target.value)}
            />
          </div>
          <div className="payment-filters-group">
            <div className="sub-tabs">
              {['All', 'Successful', 'Pending', 'Failed'].map((tab) => (
                <button 
                  key={tab} 
                  className={`sub-tab ${paymentFilter === tab ? 'active' : ''}`}
                  onClick={() => setPaymentFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="btn-export-csv">
              <span className="icon">📥</span> Export CSV
            </button>
          </div>
        </div>

        <div className="table-card animate-slide-up">
          <div className="table-responsive">
            <table className="custom-data-table">
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Tenant</th>
                  <th>Property / Unit</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredPayments.map((p, idx) => (
                  <tr key={idx}>
                    <td className="light-text">{p.ref}</td>
                    <td className="bold-text">{p.tenant}</td>
                    <td>{p.propertyUnit}</td>
                    <td className="bold-text">{p.amount}</td>
                    <td>{p.date}</td>
                    <td>{p.method}</td>
                    <td>
                      <span className={`status-pill ${p.status.toLowerCase()}`}>{p.status}</span>
                    </td>
                    <td>
                      <button className="btn-table-icon" title="Download Receipt">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredPayments.length === 0 && (
                  <tr>
                    <td colSpan="8" className="empty-table-msg">No payments found matching your filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderReports = () => {
    return (
      <div className="reports-view animate-fade-in">
        <div className="view-header-controls">
          <div className="sub-tabs">
            {['Monthly', 'Quarterly', 'Yearly'].map((tab) => (
              <button 
                key={tab} 
                className={`sub-tab ${reportsFilter === tab ? 'active' : ''}`}
                onClick={() => setReportsFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="btn-export-csv">
            <span className="icon">📥</span> Export Report
          </button>
        </div>

        <div className="reports-stats-cards animate-slide-up">
          <div className="report-stat-card">
            <span className="rep-stat-label">Total Collected</span>
            <span className="rep-stat-value">₦49.64M</span>
            <span className="rep-stat-desc">Jan–Jul 2024</span>
          </div>
          <div className="report-stat-card">
            <span className="rep-stat-label">Collection Rate</span>
            <span className="rep-stat-value">96.4%</span>
            <span className="rep-stat-desc positive">+3.2% vs last year</span>
          </div>
          <div className="report-stat-card">
            <span className="rep-stat-label">Avg. Days to Pay</span>
            <span className="rep-stat-value">2.3 days</span>
            <span className="rep-stat-desc text-muted">from due date</span>
          </div>
          <div className="report-stat-card">
            <span className="rep-stat-label">Defaulter Rate</span>
            <span className="rep-stat-value">3.6%</span>
            <span className="rep-stat-desc negative">2 tenants</span>
          </div>
        </div>

        <div className="reports-charts-grid animate-slide-up">
          <div className="chart-card large-chart">
            <h3>Revenue by Month</h3>
            <div className="chart-container">
              <svg viewBox="0 0 800 250" className="bar-chart-svg">
                <line x1="60" y1="30" x2="760" y2="30" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="60" y1="75" x2="760" y2="75" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="60" y1="120" x2="760" y2="120" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="60" y1="165" x2="760" y2="165" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="60" y1="210" x2="760" y2="210" stroke="#E2E8F0" strokeWidth="1.5" />

                <text x="45" y="34" textAnchor="end" fill="#94A3B8" fontSize="11">₦8.0M</text>
                <text x="45" y="79" textAnchor="end" fill="#94A3B8" fontSize="11">₦6.0M</text>
                <text x="45" y="124" textAnchor="end" fill="#94A3B8" fontSize="11">₦4.0M</text>
                <text x="45" y="169" textAnchor="end" fill="#94A3B8" fontSize="11">₦2.0M</text>
                <text x="45" y="214" textAnchor="end" fill="#94A3B8" fontSize="11">₦0.0M</text>

                {/* Jan */}
                <rect x="110" y="80" width="30" height="130" rx="4" fill="#1D5BFF" />
                <rect x="142" y="198" width="10" height="12" rx="2" fill="#E2E8F0" />
                <text x="131" y="230" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Jan</text>

                {/* Feb */}
                <rect x="210" y="60" width="30" height="150" rx="4" fill="#1D5BFF" />
                <rect x="242" y="196" width="10" height="14" rx="2" fill="#E2E8F0" />
                <text x="231" y="230" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Feb</text>

                {/* Mar */}
                <rect x="310" y="70" width="30" height="140" rx="4" fill="#1D5BFF" />
                <rect x="342" y="194" width="10" height="16" rx="2" fill="#E2E8F0" />
                <text x="331" y="230" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Mar</text>

                {/* Apr */}
                <rect x="410" y="50" width="30" height="160" rx="4" fill="#1D5BFF" />
                <rect x="442" y="198" width="10" height="12" rx="2" fill="#E2E8F0" />
                <text x="431" y="230" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Apr</text>

                {/* May */}
                <rect x="510" y="38" width="30" height="172" rx="4" fill="#1D5BFF" />
                <rect x="542" y="198" width="10" height="12" rx="2" fill="#E2E8F0" />
                <text x="531" y="230" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">May</text>

                {/* Jun */}
                <rect x="610" y="34" width="30" height="176" rx="4" fill="#1D5BFF" />
                <rect x="642" y="199" width="10" height="11" rx="2" fill="#E2E8F0" />
                <text x="631" y="230" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Jun</text>
              </svg>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-dot blue"></span>
                <span>Virtual Account</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot light-gray"></span>
                <span>Manual</span>
              </div>
            </div>
          </div>

          <div className="chart-card large-chart">
            <h3>Collection Trend</h3>
            <div className="chart-container">
              <svg viewBox="0 0 800 250" className="line-chart-svg">
                <line x1="60" y1="30" x2="760" y2="30" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="60" y1="75" x2="760" y2="75" stroke="#F1F5F9" strokeWidth="1" />
                <line x1="60" y1="120" x2="760" y2="120" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="60" y1="165" x2="760" y2="165" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="60" y1="210" x2="760" y2="210" stroke="#E2E8F0" strokeWidth="1.5" />

                <text x="45" y="34" textAnchor="end" fill="#94A3B8" fontSize="11">₦10.0M</text>
                <text x="45" y="79" textAnchor="end" fill="#94A3B8" fontSize="11">₦7.5M</text>
                <text x="45" y="124" textAnchor="end" fill="#94A3B8" fontSize="11">₦5.0M</text>
                <text x="45" y="169" textAnchor="end" fill="#94A3B8" fontSize="11">₦2.5M</text>
                <text x="45" y="214" textAnchor="end" fill="#94A3B8" fontSize="11">₦0.0M</text>

                <defs>
                  <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <path 
                  d="M110 140 L210 125 L310 130 L410 115 L510 105 L610 103 L710 105" 
                  fill="none" 
                  stroke="#10B981" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                <path 
                  d="M110 140 L210 125 L310 130 L410 115 L510 105 L610 103 L710 105 L710 210 L110 210 Z" 
                  fill="url(#trendGradient)" 
                />

                <circle cx="110" cy="140" r="5" fill="#10B981" stroke="white" strokeWidth="1.5" />
                <circle cx="210" cy="125" r="5" fill="#10B981" stroke="white" strokeWidth="1.5" />
                <circle cx="310" cy="130" r="5" fill="#10B981" stroke="white" strokeWidth="1.5" />
                <circle cx="410" cy="115" r="5" fill="#10B981" stroke="white" strokeWidth="1.5" />
                <circle cx="510" cy="105" r="5" fill="#10B981" stroke="white" strokeWidth="1.5" />
                <circle cx="610" cy="103" r="5" fill="#10B981" stroke="white" strokeWidth="1.5" />
                <circle cx="710" cy="105" r="5" fill="#10B981" stroke="white" strokeWidth="1.5" />

                <text x="110" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Jan</text>
                <text x="210" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Feb</text>
                <text x="310" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Mar</text>
                <text x="410" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Apr</text>
                <text x="510" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">May</text>
                <text x="610" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Jun</text>
                <text x="710" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="600">Jul</text>
              </svg>
            </div>
          </div>
        </div>

        <div className="reports-bottom-section animate-slide-up">
          <div className="table-card">
            <div className="revenue-property-header">
              <h3>Revenue by Property</h3>
            </div>
            <div className="table-responsive">
              <table className="custom-data-table">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Collected</th>
                    <th>Share</th>
                    <th>Occupancy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bold-text">Victoria Court</td>
                    <td className="bold-text">₦3.20M</td>
                    <td>
                      <div className="share-bar-container">
                        <div className="share-bar-fill" style={{ width: '40%', background: '#1D5BFF' }}></div>
                        <span className="share-text">40%</span>
                      </div>
                    </td>
                    <td><span className="status-pill occupied">100%</span></td>
                  </tr>
                  <tr>
                    <td className="bold-text">Lekki Heights Estate</td>
                    <td className="bold-text">₦2.40M</td>
                    <td>
                      <div className="share-bar-container">
                        <div className="share-bar-fill" style={{ width: '30%', background: '#10B981' }}></div>
                        <span className="share-text">30%</span>
                      </div>
                    </td>
                    <td><span className="status-pill occupied">83%</span></td>
                  </tr>
                  <tr>
                    <td className="bold-text">Gbagada Green</td>
                    <td className="bold-text">₦1.70M</td>
                    <td>
                      <div className="share-bar-container">
                        <div className="share-bar-fill" style={{ width: '21%', background: '#F59E0B' }}></div>
                        <span className="share-text">21%</span>
                      </div>
                    </td>
                    <td><span className="status-pill occupied">85%</span></td>
                  </tr>
                  <tr>
                    <td className="bold-text">Surulere Plaza</td>
                    <td className="bold-text">₦0.72M</td>
                    <td>
                      <div className="share-bar-container">
                        <div className="share-bar-fill" style={{ width: '9%', background: '#6B7280' }}></div>
                        <span className="share-text">9%</span>
                      </div>
                    </td>
                    <td><span className="status-pill vacant">67%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderSettings = () => {
    return (
      <div className="settings-view animate-fade-in">
        {showSaveToast && (
          <div className="save-toast-notification">
            <span>✓ Settings saved successfully!</span>
          </div>
        )}

        <div className="settings-layout">
          <div className="settings-sidebar">
            {['Profile', 'Security', 'Notifications', 'Billing', 'API Keys'].map((tab) => (
              <button
                key={tab}
                className={`settings-sidebar-tab ${settingsTab === tab ? 'active' : ''}`}
                onClick={() => setSettingsTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="settings-content-panel">
            {settingsTab === 'Profile' && (
              <div className="profile-settings-form animate-fade-in">
                <h3>Profile Information</h3>
                <p className="panel-subtitle">Update your personal details</p>

                <div className="avatar-section">
                  <div className="avatar-circle-large">KA</div>
                  <button className="btn-change-avatar">Change Avatar</button>
                </div>

                <form onSubmit={handleSaveSettings} className="settings-form">
                  <div className="form-row">
                    <div className="form-group-half">
                      <label>First Name</label>
                      <input 
                        type="text" 
                        value={profileFirstName}
                        onChange={(e) => setProfileFirstName(e.target.value)}
                      />
                    </div>
                    <div className="form-group-half">
                      <label>Last Name</label>
                      <input 
                        type="text" 
                        value={profileLastName}
                        onChange={(e) => setProfileLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group-half">
                      <label>Email</label>
                      <input 
                        type="email" 
                        value={profileEmail}
                        onChange={(e) => setProfileEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group-half">
                      <label>Phone</label>
                      <input 
                        type="text" 
                        value={profilePhone}
                        onChange={(e) => setProfilePhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group-half">
                      <label>Company</label>
                      <input 
                        type="text" 
                        value={profileCompany}
                        onChange={(e) => setProfileCompany(e.target.value)}
                      />
                    </div>
                    <div className="form-group-half">
                      <label>Address</label>
                      <input 
                        type="text" 
                        value={profileAddress}
                        onChange={(e) => setProfileAddress(e.target.value)}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-save-changes">Save Changes</button>
                </form>
              </div>
            )}

            {settingsTab === 'Security' && (
              <div className="security-settings-form animate-fade-in">
                <h3>Security Settings</h3>
                <p className="panel-subtitle">Manage your password and security credentials</p>

                <form onSubmit={handleSaveSettings} className="settings-form">
                  <div className="form-group-full">
                    <label>Current Password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                  <div className="form-group-full">
                    <label>New Password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                  <div className="form-group-full">
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>

                  <div className="security-toggles">
                    <div className="toggle-group">
                      <div className="toggle-info">
                        <strong>Two-Factor Authentication (2FA)</strong>
                        <p>Secure your account with a verification code sent to your mobile phone.</p>
                      </div>
                      <input type="checkbox" className="switch-input" defaultChecked />
                    </div>
                  </div>

                  <button type="submit" className="btn-save-changes">Save Password</button>
                </form>
              </div>
            )}

            {settingsTab === 'Notifications' && (
              <div className="notifications-settings-form animate-fade-in">
                <h3>Notification Preferences</h3>
                <p className="panel-subtitle">Choose how you receive alerts and reports</p>

                <form onSubmit={handleSaveSettings} className="settings-form">
                  <div className="checkbox-list">
                    <label className="checkbox-item">
                      <input type="checkbox" defaultChecked />
                      <div className="checkbox-label-info">
                        <strong>Payment Collections</strong>
                        <p>Receive alerts when tenants pay through their virtual accounts.</p>
                      </div>
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" defaultChecked />
                      <div className="checkbox-label-info">
                        <strong>Overdue Alerts</strong>
                        <p>Receive notifications when rent is past the due date.</p>
                      </div>
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" defaultChecked />
                      <div className="checkbox-label-info">
                        <strong>Monthly Reports</strong>
                        <p>Receive a summary of collections and occupancy at the end of each month.</p>
                      </div>
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" />
                      <div className="checkbox-label-info">
                        <strong>Nomba Settlement Alerts</strong>
                        <p>Notify when funds are cleared and deposited into your primary bank account.</p>
                      </div>
                    </label>
                  </div>

                  <button type="submit" className="btn-save-changes">Save Preferences</button>
                </form>
              </div>
            )}

            {settingsTab === 'Billing' && (
              <div className="billing-settings-form animate-fade-in">
                <h3>Subscription & Billing</h3>
                <p className="panel-subtitle">Manage your plan and invoices</p>

                <div className="billing-current-plan">
                  <div className="plan-info-left">
                    <span className="badge-plan">ACTIVE PLAN</span>
                    <h4>Growth Plan</h4>
                    <p>Up to 100 units managed · ₦24,900/month</p>
                  </div>
                  <button className="btn-change-plan">Upgrade Plan</button>
                </div>

                <div className="billing-card-info">
                  <h4>Payment Method</h4>
                  <div className="card-row">
                    <span className="card-icon">💳</span>
                    <div className="card-details">
                      <strong>Visa ending in 4242</strong>
                      <p>Expires 12/27</p>
                    </div>
                    <button className="btn-edit-payment">Edit</button>
                  </div>
                </div>

                <button type="button" className="btn-save-changes" onClick={() => alert('Billing settings updated!')}>Update Billing Details</button>
              </div>
            )}

            {settingsTab === 'API Keys' && (
              <div className="api-settings-form animate-fade-in">
                <h3>API Keys</h3>
                <p className="panel-subtitle">Access keys for building custom integrations</p>

                <div className="api-keys-list">
                  <div className="api-key-block">
                    <div className="key-header">
                      <strong>Public Key (Live)</strong>
                      <span className="key-badge">Active</span>
                    </div>
                    <div className="key-value-row">
                      <input type="text" readOnly value="pk_live_51Ny87eH1Qv83fjsd88A" className="api-key-input" />
                      <button className="btn-copy-key" onClick={() => handleCopy('pk_live_51Ny87eH1Qv83fjsd88A', 'api-pk')}>
                        {copiedId === 'api-pk' ? '✅ Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="api-key-block">
                    <div className="key-header">
                      <strong>Secret Key (Live)</strong>
                      <span className="key-badge warning">Sensitive</span>
                    </div>
                    <div className="key-value-row">
                      <input type="password" readOnly value="sk_live_51Ny87eH1Qv83fjsd88A" className="api-key-input" />
                      <button className="btn-copy-key" onClick={() => handleCopy('sk_live_51Ny87eH1Qv83fjsd88A', 'api-sk')}>
                        {copiedId === 'api-sk' ? '✅ Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                <button className="btn-generate-key" onClick={() => alert('New test key generated!')}>Generate New Test Key</button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderNotifications = () => {
    return (
      <div className="notifications-view animate-fade-in">
        <div className="view-header-controls">
          <h3>Recent Notifications</h3>
          <button className="btn-filter" onClick={() => setNotifications([])}>Clear All</button>
        </div>
        <div className="notifications-list animate-slide-up">
          {notifications.map(n => (
            <div className={`notification-item-card ${n.type}`} key={n.id}>
              <div className="notification-icon-indicator">
                {n.type === 'success' && '✅'}
                {n.type === 'warning' && '⚠️'}
                {n.type === 'info' && 'ℹ️'}
                {n.type === 'danger' && '🚨'}
              </div>
              <div className="notification-body-content">
                <h4>{n.title}</h4>
                <p>{n.message}</p>
                <span className="notification-time">{n.time}</span>
              </div>
            </div>
          ))}
          {notifications.length === 0 && (
            <div className="fallback-card">
              <div className="fallback-icon">🔔</div>
              <h2>All Caught Up!</h2>
              <p>You have no unread notifications.</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (currentPage === 'login') {
    return (
      <div className="app">
        <div className="login-page">
          <div className="login-left">
            <div className="login-logo">
              <div className="logo-icon">R</div>
              <span>RaaS</span>
            </div>
            <div className="login-headline">
              <h2>Automate rent.</h2>
              <h2>Eliminate chasing.</h2>
            </div>
            <div className="login-features">
              <div className="login-feature-item">
                <span className="checkmark">✓</span>
                <span>Dedicated virtual account per tenant</span>
              </div>
              <div className="login-feature-item">
                <span className="checkmark">✓</span>
                <span>Instant payment notifications</span>
              </div>
              <div className="login-feature-item">
                <span className="checkmark">✓</span>
                <span>Automatic receipt generation</span>
              </div>
              <div className="login-feature-item">
                <span className="checkmark">✓</span>
                <span>Real-time analytics dashboard</span>
              </div>
            </div>
          </div>

          <div className="login-right">
            <div className="login-form-container">
              <h3 className="login-title">Welcome back</h3>
              <p className="login-subtitle">Signin to your RaaS workspace</p>

              <div className="user-type-tabs">
                {['Landlord', 'Tenant', 'Caretaker'].map((type) => (
                  <button
                    key={type}
                    className={`tab ${userType === type ? 'active' : ''}`}
                    onClick={() => setUserType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn-signin-submit">Sign in →</button>
              </form>

              <p className="signup-link">
                Don't have an account? <a href="#signup" onClick={(e) => { e.preventDefault(); setCurrentPage('signup'); }}>Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'signup') {
    return (
      <div className="app">
        <div className="login-page">
          <div className="login-left">
            <div className="login-logo" onClick={() => setCurrentPage('landing')} style={{ cursor: 'pointer' }}>
              <div className="logo-icon">R</div>
              <span>RaaS</span>
            </div>
            <div className="login-headline">
              <h2>Automate rent.</h2>
              <h2>Eliminate chasing.</h2>
            </div>
            <div className="login-features">
              <div className="login-feature-item">
                <span className="checkmark-circle">✓</span>
                <span>Dedicated virtual account per tenant</span>
              </div>
              <div className="login-feature-item">
                <span className="checkmark-circle">✓</span>
                <span>Instant payment notifications</span>
              </div>
              <div className="login-feature-item">
                <span className="checkmark-circle">✓</span>
                <span>Automatic receipt generation</span>
              </div>
              <div className="login-feature-item">
                <span className="checkmark-circle">✓</span>
                <span>Real-time analytics dashboard</span>
              </div>
            </div>
          </div>

          <div className="login-right">
            <div className="login-form-container">
              <h3 className="login-title">Create your account</h3>
              <p className="login-subtitle">Start automating rent collection for free</p>

              <div className="segmented-control">
                {['Landlord', 'Tenant', 'Caretaker'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`segmented-tab ${userType === type ? 'active' : ''}`}
                    onClick={() => setUserType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }}>
                <div className="form-row">
                  <div className="form-group-half">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Emeka"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group-half">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Okafor"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="08012345678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn-signin-submit">Create account →</button>
              </form>

              <p className="signup-link">
                Already have an account? <a href="#login" onClick={(e) => { e.preventDefault(); setCurrentPage('login'); }}>Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'dashboard') {
    if (userType === 'Tenant') {
      const displayName = (firstName && lastName) ? `${firstName} ${lastName}` : 'Emeka Okafor';
      const displayInitials = (firstName && lastName) ? `${firstName[0]}${lastName[0]}`.toUpperCase() : 'EO';
      
      return (
        <div className="tenant-portal">
          <header className="tenant-portal-header-outer">
            <div className="tenant-portal-header-inner">
              <div className="tenant-portal-logo">
                <div className="logo-icon-small">R</div>
                <span className="logo-text">RaaS</span>
                <span className="divider-line">|</span>
                <span className="portal-subtitle">Tenant Portal</span>
              </div>
              <div className="tenant-portal-actions">
                <div className="tenant-header-avatar">{displayInitials}</div>
                <button className="tenant-header-signout" onClick={() => { setCurrentPage('landing'); }} title="Sign out">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </button>
              </div>
            </div>
          </header>
          
          <main className="tenant-portal-content">
            <div className="tenant-welcome-card">
              <div className="tenant-welcome-left">
                <div className="tenant-avatar">{displayInitials}</div>
                <div className="tenant-welcome-info">
                  <h2>Welcome, {displayName}</h2>
                  <p>Flat 1A · Lekki Heights Estate</p>
                </div>
              </div>
              <div className="tenant-status-container">
                <span className="tenant-status-label">Account Status</span>
                <span className="tenant-status-badge clear">Clear</span>
              </div>
            </div>

            <div className="tenant-va-card">
              <div className="tenant-va-header">
                <p>Your dedicated payment account — make all rent payments here</p>
              </div>
              <div className="tenant-va-number">
                9038 4217 65
              </div>
              <div className="tenant-va-footer">
                <div className="tenant-va-bank">Nomba / Wema Bank</div>
                <div className="tenant-va-ref">Reference: <span>RAAS-T001-P001</span></div>
              </div>
              <div className="tenant-va-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>Secured by Nomba. Transfer any amount and it will be applied to your rent automatically.</span>
              </div>
            </div>

            <div className="tenant-stats-grid">
              <div className="tenant-stat-card">
                <span className="tenant-stat-label">Monthly Rent</span>
                <strong className="tenant-stat-value">₦200,000</strong>
              </div>
              <div className="tenant-stat-card">
                <span className="tenant-stat-label">Next Due Date</span>
                <strong className="tenant-stat-value dark">Aug 1, 2024</strong>
              </div>
              <div className="tenant-stat-card">
                <span className="tenant-stat-label">Lease Started</span>
                <strong className="tenant-stat-value dark">2023-02-01</strong>
              </div>
            </div>

            <div className="tenant-history-card">
              <h3>Payment History</h3>
              <div className="tenant-table-responsive">
                <table className="tenant-history-table">
                  <thead>
                    <tr>
                      <th>Reference</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ref-text">NOMBA-TXN-7821934</td>
                      <td className="amount-text">₦200,000</td>
                      <td>2024-07-02</td>
                      <td><span className="status-badge-clear">Successful</span></td>
                      <td>
                        <a href="#" className="receipt-link" onClick={(e) => { e.preventDefault(); alert('Downloading receipt...'); }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          <span>Receipt</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="ref-text">NOMBA-TXN-7810500</td>
                      <td className="amount-text">₦200,000</td>
                      <td>2024-06-02</td>
                      <td><span className="status-badge-clear">Successful</span></td>
                      <td>
                        <a href="#" className="receipt-link" onClick={(e) => { e.preventDefault(); alert('Downloading receipt...'); }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          <span>Receipt</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      );
    } else if (userType === 'Caretaker') {
      const displayName = (firstName && lastName) ? `${firstName} ${lastName}` : 'Chidi Amadi';
      const displayInitials = (firstName && lastName) ? `${firstName[0]}${lastName[0]}`.toUpperCase() : 'CA';
      
      const openTasksCount = tasks.filter(t => t.status === 'Open').length;
      const progressTasksCount = tasks.filter(t => t.status === 'In Progress').length;
      const completedTasksCount = tasks.filter(t => t.status === 'Completed').length;
      
      const handleToggleStatus = (id) => {
        setTasks(prev => prev.map(t => {
          if (t.id === id) {
            let nextStatus = 'Open';
            if (t.status === 'Open') nextStatus = 'In Progress';
            else if (t.status === 'In Progress') nextStatus = 'Completed';
            else nextStatus = 'Open';
            return { ...t, status: nextStatus };
          }
          return t;
        }));
      };

      const handleMarkCompleted = (id) => {
        setTasks(prev => prev.map(t => {
          if (t.id === id) {
            return { ...t, status: 'Completed' };
          }
          return t;
        }));
      };

      const handleAddTask = (e) => {
        e.preventDefault();
        if (!newTaskTitle) return;
        const newTask = {
          id: Date.now(),
          title: newTaskTitle,
          priority: newTaskPriority,
          unit: newTaskUnit,
          property: newTaskProperty,
          date: new Date().toISOString().split('T')[0],
          status: 'Open'
        };
        setTasks(prev => [newTask, ...prev]);
        setNewTaskTitle('');
        setShowAddTaskModal(false);
      };

      return (
        <div className="caretaker-portal">
          <header className="caretaker-portal-header-outer">
            <div className="caretaker-portal-header-inner">
              <div className="caretaker-portal-logo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
                <span className="logo-text">RaaS</span>
                <span className="divider-line">|</span>
                <span className="portal-subtitle">Caretaker Portal</span>
              </div>
              <div className="caretaker-portal-actions">
                <div className="caretaker-header-avatar">{displayInitials}</div>
                <button className="caretaker-header-signout" onClick={() => { setCurrentPage('landing'); }} title="Sign out">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                </button>
              </div>
            </div>
          </header>

          <main className="caretaker-portal-content">
            <div className="caretaker-title-section">
              <h2>Caretaker Dashboard</h2>
              <p>{displayName} - Lekki Heights Estate & Victoria Court</p>
            </div>

            <div className="caretaker-stats-grid">
              <div className="caretaker-stat-card">
                <strong className="caretaker-stat-value open">{openTasksCount}</strong>
                <span className="caretaker-stat-label">Open Tasks</span>
              </div>
              <div className="caretaker-stat-card">
                <strong className="caretaker-stat-value progress">{progressTasksCount}</strong>
                <span className="caretaker-stat-label">In Progress</span>
              </div>
              <div className="caretaker-stat-card">
                <strong className="caretaker-stat-value completed">{completedTasksCount}</strong>
                <span className="caretaker-stat-label">Completed (Jul)</span>
              </div>
              <div className="caretaker-stat-card">
                <strong className="caretaker-stat-value total">20</strong>
                <span className="caretaker-stat-label">Units Under Care</span>
              </div>
            </div>

            <div className="caretaker-section-card">
              <div className="caretaker-section-header">
                <h3>Maintenance Requests</h3>
                <button className="caretaker-btn-primary" onClick={() => setShowAddTaskModal(true)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  <span>Report Issue</span>
                </button>
              </div>

              <div className="caretaker-tasks-list">
                {tasks.map(task => (
                  <div key={task.id} className="caretaker-task-item">
                    <div className="caretaker-task-left">
                      <div className="caretaker-task-title-row">
                        <h4>{task.title}</h4>
                        <span className={`priority-badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
                      </div>
                      <p className="caretaker-task-meta">
                        {task.unit} · {task.property} · Reported {task.date}
                      </p>
                    </div>
                    <div className="caretaker-task-actions">
                      <span className={`status-pill ${task.status.toLowerCase().replace(' ', '-')}`}>
                        {task.status}
                      </span>
                      {task.status !== 'Completed' && (
                        <>
                          <button className="task-action-btn edit" onClick={() => handleToggleStatus(task.id)} title="Change status (Open / In Progress)">
                            ✏️
                          </button>
                          <button className="task-action-btn complete" onClick={() => handleMarkCompleted(task.id)} title="Mark as Completed">
                            ✔️
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="caretaker-section-card">
              <h3>Overdue Rent Alerts</h3>
              <div className="caretaker-alerts-list">
                <div className="caretaker-alert-item">
                  <div className="caretaker-alert-left">
                    <h4>Ngozi Adeyemi</h4>
                    <p>Flat 1B · Lekki Heights Estate</p>
                  </div>
                  <div className="caretaker-alert-center">
                    <strong>₦200,000</strong>
                    <span className="outstanding-text">outstanding</span>
                  </div>
                  <div className="caretaker-alert-right">
                    <button className="caretaker-btn-remind" onClick={() => alert('Sending SMS & Email reminder to Ngozi Adeyemi...')}>
                      ⚡ Remind
                    </button>
                  </div>
                </div>

                <div className="caretaker-alert-item">
                  <div className="caretaker-alert-left">
                    <h4>TechHub Ltd</h4>
                    <p>Shop A1 · Surulere Plaza</p>
                  </div>
                  <div className="caretaker-alert-center">
                    <strong>₦540,000</strong>
                    <span className="outstanding-text">outstanding</span>
                  </div>
                  <div className="caretaker-alert-right">
                    <button className="caretaker-btn-remind" onClick={() => alert('Sending SMS & Email reminder to TechHub Ltd...')}>
                      ⚡ Remind
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {showAddTaskModal && (
            <div className="caretaker-modal-overlay">
              <div className="caretaker-modal">
                <div className="caretaker-modal-header">
                  <h3>Report New Maintenance Issue</h3>
                  <button className="caretaker-modal-close" onClick={() => setShowAddTaskModal(false)}>×</button>
                </div>
                <form onSubmit={handleAddTask} className="caretaker-modal-form">
                  <div className="form-group">
                    <label>Issue Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Fix leaking pipe" 
                      value={newTaskTitle} 
                      onChange={e => setNewTaskTitle(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Priority</label>
                      <select value={newTaskPriority} onChange={e => setNewTaskPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Unit</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Flat 2B" 
                        value={newTaskUnit} 
                        onChange={e => setNewTaskUnit(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Property</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Lekki Heights" 
                      value={newTaskProperty} 
                      onChange={e => setNewTaskProperty(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="caretaker-modal-actions">
                    <button type="button" className="caretaker-btn-cancel" onClick={() => setShowAddTaskModal(false)}>Cancel</button>
                    <button type="submit" className="caretaker-btn-submit">Submit Issue</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="app">
        <div className="dashboard-container">
          <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
              <div className="sidebar-logo">
                <div className="logo-icon">R</div>
                <span className={sidebarOpen ? '' : 'hidden'}>RaaS</span>
              </div>
            </div>

            <nav className="sidebar-nav">
              {navItems.map((item, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className={`nav-item ${item.label === activeTab ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setActiveTab(item.label); }}
                >
                  <span className="nav-icon">
                    {item.icon}
                    {!sidebarOpen && item.badge && item.label === 'Notifications' && notifications.length > 0 && (
                      <span className="collapsed-badge">{notifications.length}</span>
                    )}
                  </span>
                  {sidebarOpen && (
                    <>
                      <span className="nav-label">{item.label}</span>
                      {item.badge && item.label === 'Notifications' && notifications.length > 0 && (
                        <span className="nav-badge">{notifications.length}</span>
                      )}
                    </>
                  )}
                </a>
              ))}
            </nav>

            <div className="sidebar-footer">
              <button className="collapse-btn" onClick={() => setSidebarOpen(!sidebarOpen)} title={sidebarOpen ? 'Collapse' : 'Expand'}>
                {sidebarOpen ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    <span>Collapse</span>
                  </>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                )}
              </button>
              <button className="signout-btn" onClick={() => { setCurrentPage('landing'); setActiveTab('Dashboard'); }} title="Sign out">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                {sidebarOpen && <span>Sign out</span>}
              </button>
            </div>
          </aside>

          <main className="dashboard-main">
            <div className="dashboard-header">
              <h1>{activeTab}</h1>
              <div className="dashboard-top-right">
                <button className="notification-btn" onClick={() => setActiveTab('Notifications')}>
                  🔔
                  {notifications.length > 0 && <span className="notification-badge-dot"></span>}
                </button>
                <div className="user-profile" onClick={() => setActiveTab('Settings')} style={{ cursor: 'pointer' }}>
                  <div className="profile-avatar">KA</div>
                  <div className="profile-info">
                    <div className="profile-name">{profileFirstName} {profileLastName}</div>
                    <div className="profile-role">Landlord</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-content">
              {activeTab === 'Dashboard' && (
                <div className="animate-fade-in">
                  <div className="stats-cards">
                    {dashboardStats.map((stat, idx) => (
                      <div key={idx} className="stat-card">
                        <div className="stat-header">
                          <span className="stat-label">{stat.label}</span>
                          <span className="stat-icon">{stat.icon}</span>
                        </div>
                        <div className="stat-value">{stat.value}</div>
                        <div className={`stat-change ${stat.changeType}`}>{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  <div className="charts-section">
                    <div className="chart-card">
                      <h3>Revenue vs Target</h3>
                      <p className="chart-date">Jan - Jul 2024</p>
                      <svg viewBox="0 0 800 200" className="line-chart">
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1D5BFF" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#1D5BFF" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polyline points="0,150 100,140 200,130 300,125 400,120 500,115 600,110 700,100 800,90" fill="none" stroke="#1D5BFF" strokeWidth="3" />
                        <polygon points="0,150 100,140 200,130 300,125 400,120 500,115 600,110 700,100 800,90 800,200 0,200" fill="url(#chartGradient)" />
                        <text x="50" y="40" fill="#999" fontSize="12">₦10.0M</text>
                        <text x="50" y="80" fill="#999" fontSize="12">₦7.5M</text>
                        <text x="50" y="120" fill="#999" fontSize="12">₦5.0M</text>
                        <text x="50" y="160" fill="#999" fontSize="12">₦0.0M</text>
                        <text x="0" y="185" fill="#999" fontSize="12">Feb</text>
                        <text x="100" y="185" fill="#999" fontSize="12">Mar</text>
                        <text x="200" y="185" fill="#999" fontSize="12">Apr</text>
                        <text x="300" y="185" fill="#999" fontSize="12">May</text>
                        <text x="400" y="185" fill="#999" fontSize="12">Jun</text>
                        <text x="500" y="185" fill="#999" fontSize="12">Jul</text>
                      </svg>
                    </div>

                    <div className="chart-card occupancy-card">
                      <h3>Occupancy Breakdown</h3>
                      <svg viewBox="0 0 200 200" className="donut-chart">
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#1D5BFF" strokeWidth="30" strokeDasharray="173 301" strokeDashoffset="0" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#FF6B6B" strokeWidth="30" strokeDasharray="44 301" strokeDashoffset="-173" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#FFC107" strokeWidth="30" strokeDasharray="13 301" strokeDashoffset="-217" />
                        <text x="100" y="110" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#333">46</text>
                      </svg>
                      <div className="occupancy-legend">
                        <div className="legend-item">
                          <span className="legend-color occupied"></span>
                          <span>Occupied: 39 units</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-color vacant"></span>
                          <span>Vacant: 6 units</span>
                        </div>
                        <div className="legend-item">
                          <span className="legend-color overdue"></span>
                          <span>Overdue: 2 units</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-section">
                    <div className="recent-payments">
                      <div className="section-header">
                        <h3>Recent Payments</h3>
                        <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setActiveTab('Payment History'); }}>View all →</a>
                      </div>
                      <table className="payments-table">
                        <thead>
                          <tr>
                            <th>Tenant</th>
                            <th>Property</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentPayments.map((payment, idx) => (
                            <tr key={idx}>
                              <td>{payment.tenant}</td>
                              <td>{payment.property}</td>
                              <td>{payment.amount}</td>
                              <td>{payment.date}</td>
                              <td><span className={`status-badge ${payment.status.toLowerCase()}`}>{payment.status}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="quick-actions">
                      <h3>Quick Actions</h3>
                      <button className="action-btn" onClick={() => setActiveTab('Properties')}>
                        <span className="action-icon">🏢</span>
                        <span>Add Property</span>
                      </button>
                      <button className="action-btn" onClick={() => setActiveTab('Tenants')}>
                        <span className="action-icon">👤</span>
                        <span>Add Tenant</span>
                      </button>
                      <button className="action-btn" onClick={() => setActiveTab('Payment History')}>
                        <span className="action-icon">📋</span>
                        <span>Generate Report</span>
                      </button>
                      <button className="action-btn" onClick={() => setActiveTab('Virtual Accounts')}>
                        <span className="action-icon">💳</span>
                        <span>View Virtual Accounts</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Properties' && renderProperties()}
              {activeTab === 'Units' && renderUnits()}
              {activeTab === 'Tenants' && renderTenants()}
              {activeTab === 'Virtual Accounts' && renderVirtualAccounts()}
              {activeTab === 'Payment History' && renderPaymentHistory()}
              {activeTab === 'Reports' && renderReports()}
              {activeTab === 'Settings' && renderSettings()}
              {activeTab === 'Notifications' && renderNotifications()}
            </div>
          </main>
        </div>
      </div>
    )
  }

  // Landing page (default)
  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-nav">
              <a href="#" className="logo">
                <div className="logo-icon">R</div>
                <span>RaaS</span>
              </a>
              <nav className="nav">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
              </nav>
              <div className="header-actions">
                <button onClick={() => setCurrentPage('login')} className="btn-signin">Sign in</button>
                <button className="btn-primary-small" onClick={() => setCurrentPage('signup')}>Get started free</button>
              </div>
            </div>
          </div>
        </div>

        <div className="header-hero">
          <div className="container hero-container">
            <div className="hero-left">
              <p className="hero-badge">⚡ Powered by Nomba Virtual Accounts</p>
              <h1>Rent As A<br /><span className="blue-text">Service.</span></h1>
              <p>RaaS gives every tenant a dedicated virtual account. Payments post instantly, receipts send automatically, and you never chase rent again.</p>
              <div className="cta-group">
                <button className="btn-primary" onClick={() => setCurrentPage('signup')}>Start for free</button>
                <button className="btn-secondary" onClick={() => { setCurrentPage('login'); setEmail('demo@raas.ng'); setPassword('demo1234'); }}>View demo dashboard</button>
              </div>
              <p className="note">No credit card required · 14-day free trial</p>
            </div>

            <div className="hero-right">
              <div className="hero-house-image-container">
                <img src="/hero-house.png" alt="Modern luxury house rendering" className="hero-house-image" />
              </div>
            </div>
          </div>
        </div>

        <div className="stats-bar">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.value}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="features-section">
          <div className="container">
            <div className="section-head">
              <p className="section-label">Platform features</p>
              <h2>Everything you need to collect rent</h2>
              <p>From virtual account creation to automated receipts — RaaS handles the full rent cycle so you can focus on growing your portfolio.</p>
            </div>
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div className="feature-item" key={idx}>
                  <div className="feature-icon">{idx + 1}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="howto-section">
          <div className="container">
            <div className="section-head">
              <p className="section-label">How it works</p>
              <h2>Set up in under 10 minutes</h2>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <div className="step-item" key={step.num}>
                  <div className="step-number">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="container">
            <div className="section-head">
              <p className="section-label">Pricing</p>
              <h2>Simple, transparent pricing</h2>
              <p>Start free. Scale as you grow. No hidden fees.</p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    {plan.period && <span className="period">{plan.period}</span>}
                  </div>
                  <p className="units">{plan.units}</p>
                  <ul className="features-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <button className={`plan-btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`} onClick={() => setCurrentPage('signup')}>
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Start collecting rent automatically today</h2>
            <p>Join 2,400+ landlords who automated rent collection with RaaS.</p>
            <button className="btn-white" onClick={() => setCurrentPage('signup')}>Create your free account</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2024 RaaS Technologies Ltd. All rights reserved. Powered by Nomba.</p>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
