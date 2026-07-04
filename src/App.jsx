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
  const [currentPage, setCurrentPage] = useState('landing') // 'landing', 'login', 'dashboard'
  const [userType, setUserType] = useState('Landlord')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

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

  const quickActions = [
    { label: 'Add Property', icon: '➕' },
    { label: 'Add Tenant', icon: '👤' },
    { label: 'Generate Report', icon: '📄' },
    { label: 'View Virtual Accounts', icon: '💳' },
  ]

  const navItems = [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Properties', icon: '🏢' },
    { label: 'Units', icon: '🏠' },
    { label: 'Tenants', icon: '👥' },
    { label: 'Virtual Accounts', icon: '💳' },
    { label: 'Payment History', icon: '📋' },
    { label: 'Reports', icon: '📈' },
    { label: 'Notifications', icon: '🔔', badge: true },
    { label: 'Settings', icon: '⚙️' },
  ]

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
                Don't have an account? <a href="#signup">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentPage === 'dashboard') {
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
                <a key={idx} href="#" className={`nav-item ${item.label === 'Dashboard' ? 'active' : ''}`}>
                  <span className="nav-icon">{item.icon}</span>
                  {sidebarOpen && (
                    <>
                      <span className="nav-label">{item.label}</span>
                      {item.badge && <span className="nav-badge">1</span>}
                    </>
                  )}
                </a>
              ))}
            </nav>

            <div className="sidebar-footer">
              <button className="collapse-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <span>Collapse</span>
              </button>
              <button className="signout-btn" onClick={() => setCurrentPage('landing')}>
                <span>Sign out</span>
              </button>
            </div>
          </aside>

          <main className="dashboard-main">
            <div className="dashboard-header">
              <h1>Dashboard</h1>
              <div className="dashboard-top-right">
                <button className="notification-btn">🔔</button>
                <div className="user-profile">
                  <div className="profile-avatar">K</div>
                  <div className="profile-info">
                    <div className="profile-name">Kunic Adeyemi</div>
                    <div className="profile-role">Landlord</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-content">
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
                    <a href="#" className="view-all">View all →</a>
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
                  {quickActions.map((action, idx) => (
                    <button key={idx} className="action-btn">
                      <span className="action-icon">{action.icon}</span>
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
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
                <button className="btn-primary-small">Get started free</button>
              </div>
            </div>
          </div>
        </div>

        <div className="header-hero">
          <div className="container hero-container">
            <div className="hero-left">
              <p className="hero-badge">⚡ Powered by Nomba Virtual Accounts</p>
              <h1>Rent collection,<br /><span className="blue-text">fully automated.</span></h1>
              <p>RaaS gives every tenant a dedicated virtual account. Payments post instantly, receipts send automatically, and you never chase rent again.</p>
              <div className="cta-group">
                <button className="btn-primary">Start for free</button>
                <button className="btn-secondary">View demo dashboard</button>
              </div>
              <p className="note">No credit card required · 14-day free trial</p>
            </div>

            <div className="hero-right">
              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <span>July 2024 Overview</span>
                  <span className="green-text">+12.4%</span>
                </div>
                <div className="dashboard-stats">
                  <div className="stat-row">
                    <div><span>Revenue</span><strong>₦8.02M</strong></div>
                    <div><span>Collected</span><strong>96%</strong></div>
                  </div>
                  <div className="stat-row">
                    <div><span>Vacant Units</span><strong>7</strong></div>
                    <div><span>Overdue</span><strong>₦540K</strong></div>
                  </div>
                </div>
                <div className="dashboard-list">
                  <div className="list-item">
                    <span className="name">Emeka Okafor</span>
                    <span className="amount">₦200,000</span>
                    <span className="status paid">Paid</span>
                  </div>
                  <div className="list-item">
                    <span className="name">Babajide Sanwo</span>
                    <span className="amount">₦400,000</span>
                    <span className="status paid">Paid</span>
                  </div>
                  <div className="list-item">
                    <span className="name">TechHub Ltd</span>
                    <span className="amount">₦180,000</span>
                    <span className="status overdue">Overdue</span>
                  </div>
                </div>
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
                  <button className={`plan-btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}>
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
            <button className="btn-white">Create your free account</button>
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
