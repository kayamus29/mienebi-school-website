import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle, Download, HelpCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const admissionSteps = [
  {
    step: 1,
    title: "Submit Inquiry",
    description: "Fill out the online inquiry form or visit our admissions office to express interest.",
  },
  {
    step: 2,
    title: "Campus Visit",
    description: "Schedule a tour of our campus to see our facilities and meet our faculty.",
  },
  {
    step: 3,
    title: "Application Form",
    description: "Complete the application form and submit required documents.",
  },
  {
    step: 4,
    title: "Assessment",
    description: "Your child will undergo an age-appropriate assessment or interaction session.",
  },
  {
    step: 5,
    title: "Interview",
    description: "A brief interview with parents to understand expectations and share our vision.",
  },
  {
    step: 6,
    title: "Admission Offer",
    description: "Successful candidates receive an admission offer letter within a week.",
  },
];

const feeStructure = [
  { grade: "Pre-Primary (Nursery - UKG)", tuition: "$3,500", development: "$500", total: "$4,000" },
  { grade: "Primary (Grade 1-5)", tuition: "$4,500", development: "$600", total: "$5,100" },
  { grade: "Middle School (Grade 6-8)", tuition: "$5,500", development: "$700", total: "$6,200" },
  { grade: "High School (Grade 9-10)", tuition: "$6,500", development: "$800", total: "$7,300" },
  { grade: "Senior Secondary (Grade 11-12)", tuition: "$7,500", development: "$1,000", total: "$8,500" },
];

const requirements = [
  "Birth Certificate (original + copy)",
  "Previous School Report Cards (last 2 years)",
  "Transfer Certificate (if applicable)",
  "Passport-size Photographs (6 copies)",
  "Proof of Address",
  "Medical Fitness Certificate",
  "Aadhaar Card / ID Proof",
  "Parent's ID Proof",
];

const faqs = [
  {
    question: "What is the age requirement for admission?",
    answer: "For Nursery, the child should be 3 years old by March 31st of the admission year. Age requirements increase correspondingly for each grade level.",
  },
  {
    question: "Is there an entrance exam for admission?",
    answer: "For Pre-Primary and Primary grades, we conduct an informal interaction session. For Middle and High School, there's a written assessment in English, Mathematics, and an interview.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "We maintain a healthy student-teacher ratio of 20:1 for Primary classes and 25:1 for Middle and High School to ensure personalized attention.",
  },
  {
    question: "Do you offer scholarships?",
    answer: "Yes, we offer merit-based scholarships, sports scholarships, and need-based financial aid. Contact our admissions office for more details.",
  },
  {
    question: "Is transportation available?",
    answer: "Yes, we provide safe and reliable bus transportation covering major routes in the city. Transport fees are additional and vary by distance.",
  },
];

const Admissions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Admissions 2025-26</span>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Begin Your Journey With Us
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              We're excited that you're considering Bright Horizon Academy for
              your child's education. Learn about our admission process and join
              our family of learners.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-gold">
              Apply Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-muted-foreground text-lg">
              Our streamlined admission process is designed to be simple and
              transparent. Here's how to get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 relative card-hover shadow-card group"
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <span className="font-serif text-xl font-bold text-secondary group-hover:text-secondary-foreground transition-colors">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3 pr-14">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Fee Structure
            </h2>
            <p className="text-muted-foreground text-lg">
              Transparent and competitive pricing for quality education.
              All fees are annual and can be paid in installments.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl shadow-card overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-serif font-bold">Grade Level</th>
                  <th className="px-6 py-4 text-left font-serif font-bold">Tuition Fee</th>
                  <th className="px-6 py-4 text-left font-serif font-bold">Development Fee</th>
                  <th className="px-6 py-4 text-left font-serif font-bold">Total Annual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {feeStructure.map((row, index) => (
                  <tr key={index} className="hover:bg-accent/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{row.grade}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.tuition}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.development}</td>
                    <td className="px-6 py-4 font-bold text-secondary">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Download className="mr-2 h-5 w-5" />
              Download Complete Fee Details
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-6">
                Required Documents
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Please ensure you have the following documents ready when
                applying for admission. All documents should be submitted as
                original and photocopies.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-accent rounded-lg p-3"
                  >
                    <CheckCircle className="h-5 w-5 text-success shrink-0" />
                    <span className="text-sm font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-elegant bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Have Questions?</CardTitle>
                <CardDescription className="text-primary-foreground/70">
                  Our admissions team is here to help
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>Admissions Office</span>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <p className="text-sm mb-2">Phone: +1 (234) 567-890 (Ext. 101)</p>
                  <p className="text-sm mb-2">Email: admissions@brighthorizon.edu</p>
                  <p className="text-sm">Hours: Mon-Fri, 8:00 AM - 4:00 PM</p>
                </div>
                <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link to="/contact">
                    Contact Admissions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full mb-4">
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm font-medium">FAQs</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about admissions.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 border-0 shadow-card"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <span className="font-serif text-lg font-bold text-left">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Take the first step towards your child's bright future.
              Start your application today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-gold">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
