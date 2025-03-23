import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card"
import { Badge } from "@/components/badge"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <span>WF</span>
              </div>
              <span className={styles.logoText}>Wareesha Faisal</span>
            </Link>
            <nav className={styles.desktopNav}>
              <Link href="#home" className={styles.navLink}>
                Home
              </Link>
              <Link href="#about" className={styles.navLink}>
                About
              </Link>
              <Link href="#services" className={styles.navLink}>
                Services
              </Link>
              <Link href="#works" className={styles.navLink}>
                Works
              </Link>
              <Link href="#testimonials" className={styles.navLink}>
                Testimonials
              </Link>
              <Link href="#contact" className={styles.navLink}>
                Contact
              </Link>
            </nav>
            <div className={styles.headerActions}>
              <ThemeToggle />
              <Button className={styles.desktopOnly}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.buttonIcon}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </Button>
              <button className={styles.mobileMenuButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="home" className={`${styles.heroSection} grid-pattern-bg`}>
          <div className="glow-effect"></div>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.profileImage}>
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  width={128}
                  height={128}
                  className={styles.profileImg}
                  priority
                />
              </div>
              <h1 className={styles.heroTitle}>Wareesha Faisal</h1>
              <p className={styles.heroSubtitle}>Academic Writing and Research Specialist</p>
              <p className={styles.heroDescription}>
                Transforming complex ideas into compelling academic narratives. Specialized in thesis writing, research
                papers, and comprehensive literature reviews.
              </p>
              <div className={styles.heroButtons}>
                <Button size="lg">
                  View My Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.buttonIconRight}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Button>
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Badge variant="outline" className={styles.sectionBadge}>
                About Me
              </Badge>
              <h2 className={styles.sectionTitle}>Professional Academic Writer & Researcher</h2>
              <p className={styles.sectionDescription}>
                Hello! I'm Wareesha Faisal, a professional academic writer, researcher, and content specialist with
                years of experience in thesis writing, research papers, business reports, case studies, and more.
              </p>
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.aboutImage}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="About me image"
                    width={600}
                    height={600}
                    className={styles.aboutImg}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>
              <div className={styles.aboutInfo}>
                <ul className={styles.infoList}>
                  <li className={styles.infoItem}>
                    <h3 className={styles.infoTitle}>Education</h3>
                    <p className={styles.infoDescription}>Bahria University, Karachi</p>
                  </li>
                  <li className={styles.infoItem}>
                    <h3 className={styles.infoTitle}>Fields Covered</h3>
                    <p className={styles.infoDescription}>
                      All Disciplines – Psychology, Business, Law, IT, Medical Sciences, Engineering, and More
                    </p>
                  </li>
                  <li className={styles.infoItem}>
                    <h3 className={styles.infoTitle}>Total Clients</h3>
                    <p className={styles.infoDescription}>70+ Satisfied Clients & Growing</p>
                  </li>
                </ul>
                <Button>Let's Collaborate</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.servicesSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Badge variant="outline" className={styles.sectionBadge}>
                Services
              </Badge>
              <h2 className={styles.sectionTitle}>Comprehensive Academic Services</h2>
              <p className={styles.sectionDescription}>
                Professional writing, research, and editing services tailored to your specific academic needs.
              </p>
            </div>
            <div className={styles.servicesGrid}>
              <Card className={styles.serviceCard}>
                <CardHeader>
                  <CardTitle>Thesis & Dissertation</CardTitle>
                  <CardDescription>Comprehensive research support</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Research Proposal Development</li>
                    <li>Literature Review & Gap Identification</li>
                    <li>Data Collection & Analysis</li>
                    <li>Discussion & Conclusion</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
              <Card className={styles.serviceCard}>
                <CardHeader>
                  <CardTitle>Research Papers</CardTitle>
                  <CardDescription>Professional academic writing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Topic Selection & Research</li>
                    <li>APA, MLA, Chicago Formatting</li>
                    <li>Peer-Review-Ready Editing</li>
                    <li>Plagiarism-Free Content</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
              <Card className={styles.serviceCard}>
                <CardHeader>
                  <CardTitle>Business Writing</CardTitle>
                  <CardDescription>Professional business documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Case Studies & Reports</li>
                    <li>Whitepapers & Policy Analysis</li>
                    <li>Technical & Legal Research</li>
                    <li>Business Proposals</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
              <Card className={styles.serviceCard}>
                <CardHeader>
                  <CardTitle>Editing & Proofreading</CardTitle>
                  <CardDescription>Polishing your academic work</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Grammar & Structure Improvements</li>
                    <li>Citation & Plagiarism Checking</li>
                    <li>Formatting & Style Enhancement</li>
                    <li>Content Refinement</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="works" className={styles.worksSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Badge variant="outline" className={styles.sectionBadge}>
                My Works
              </Badge>
              <h2 className={styles.sectionTitle}>Research Across Disciplines</h2>
              <p className={styles.sectionDescription}>
                I have successfully assisted in various research domains across multiple fields.
              </p>
            </div>
            <div className={styles.worksGrid}>
              <div className={styles.workCard}>
                <div className={styles.workImageContainer}>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Psychology research"
                    width={600}
                    height={400}
                    className={styles.workImage}
                  />
                  <div className={styles.workImageOverlay}></div>
                  <Badge className={styles.workBadge}>Psychology</Badge>
                </div>
                <h3 className={styles.workTitle}>Impact of Social Media on Mental Health</h3>
                <p className={styles.workDescription}>
                  A comprehensive study examining the psychological effects of social media usage patterns on mental
                  wellbeing.
                </p>
              </div>
              <div className={styles.workCard}>
                <div className={styles.workImageContainer}>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Business research"
                    width={600}
                    height={400}
                    className={styles.workImage}
                  />
                  <div className={styles.workImageOverlay}></div>
                  <Badge className={styles.workBadge}>Business</Badge>
                </div>
                <h3 className={styles.workTitle}>Market Analysis for Startup Growth</h3>
                <p className={styles.workDescription}>
                  Strategic market analysis providing actionable insights for emerging startups in competitive
                  industries.
                </p>
              </div>
              <div className={styles.workCard}>
                <div className={styles.workImageContainer}>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Law research"
                    width={600}
                    height={400}
                    className={styles.workImage}
                  />
                  <div className={styles.workImageOverlay}></div>
                  <Badge className={styles.workBadge}>Law</Badge>
                </div>
                <h3 className={styles.workTitle}>The Role of International Law in Cybersecurity</h3>
                <p className={styles.workDescription}>
                  Analysis of international legal frameworks governing cybersecurity and their effectiveness in the
                  digital age.
                </p>
              </div>
            </div>
            <div className={styles.sectionCta}>
              <Button>
                Need a Sample? Let's Discuss
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.buttonIconRight}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.testimonialsSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Badge variant="outline" className={styles.sectionBadge}>
                Testimonials
              </Badge>
              <h2 className={styles.sectionTitle}>What Clients Say</h2>
              <p className={styles.sectionDescription}>
                Feedback from satisfied clients across various academic and professional fields.
              </p>
            </div>
            <div className={styles.testimonialsGrid}>
              <Card className={styles.testimonialCard}>
                <CardHeader>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Dr. Hammad R."
                        width={50}
                        height={50}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div>
                      <CardTitle>Dr. Hammad R.</CardTitle>
                      <CardDescription>Business Consultant</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={styles.testimonialText}>
                    "Wareesha's business report was detailed and data-driven. Excellent work!"
                  </p>
                </CardContent>
              </Card>
              <Card className={styles.testimonialCard}>
                <CardHeader>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Sana K."
                        width={50}
                        height={50}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div>
                      <CardTitle>Sana K.</CardTitle>
                      <CardDescription>Research Scholar</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={styles.testimonialText}>
                    "Her literature review saved me weeks of research! Highly recommended."
                  </p>
                </CardContent>
              </Card>
              <Card className={styles.testimonialCard}>
                <CardHeader>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="M. Ahmed"
                        width={50}
                        height={50}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div>
                      <CardTitle>M. Ahmed</CardTitle>
                      <CardDescription>Engineering Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className={styles.testimonialText}>
                    "From technical reports to research papers, Wareesha delivers high-quality content every time."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Badge variant="outline" className={styles.sectionBadge}>
                Contact Me
              </Badge>
              <h2 className={styles.sectionTitle}>Get In Touch</h2>
              <p className={styles.sectionDescription}>
                Need help with your research? Let's discuss how I can assist with your academic needs.
              </p>
            </div>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.contactItemTitle}>Email</h3>
                    <p className={styles.contactItemText}>your-email@example.com</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.contactItemTitle}>Phone</h3>
                    <p className={styles.contactItemText}>+92 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.contactItemTitle}>Location</h3>
                    <p className={styles.contactItemText}>Karachi, Pakistan</p>
                  </div>
                </div>
                <div className={styles.workingHours}>
                  <h3 className={styles.workingHoursTitle}>Working Hours</h3>
                  <div className={styles.workingHoursGrid}>
                    <div className={styles.workingHoursRow}>
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className={styles.workingHoursRow}>
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className={styles.workingHoursRow}>
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contactForm}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Name
                    </label>
                    <input id="name" className={styles.formInput} placeholder="Your name" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      Email
                    </label>
                    <input id="email" type="email" className={styles.formInput} placeholder="Your email" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      Subject
                    </label>
                    <input id="subject" className={styles.formInput} placeholder="Subject" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message
                    </label>
                    <textarea id="message" className={styles.formTextarea} placeholder="Your message" />
                  </div>
                  <Button className={styles.formButton}>Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Wareesha Faisal. All rights reserved.</p>
            <nav className={styles.footerNav}>
              <Link href="#" className={styles.footerLink}>
                Terms of Service
              </Link>
              <Link href="#" className={styles.footerLink}>
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

