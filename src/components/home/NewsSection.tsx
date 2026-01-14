import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import newsImage1 from "@/assets/news-1.jpg";
import newsImage2 from "@/assets/news-2.jpg";
import newsImage3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair 2025: Innovation at Its Best",
    excerpt:
      "Students showcased remarkable projects at this year's science fair, demonstrating creativity and scientific thinking.",
    image: newsImage1,
    date: "January 10, 2025",
    author: "Admin",
    category: "Academic",
  },
  {
    id: 2,
    title: "Sports Day Championship Results Announced",
    excerpt:
      "Congratulations to all participants and winners of the inter-house sports championship held last week.",
    image: newsImage2,
    date: "January 8, 2025",
    author: "Sports Dept",
    category: "Sports",
  },
  {
    id: 3,
    title: "New Digital Learning Lab Inauguration",
    excerpt:
      "Our new state-of-the-art computer lab equipped with the latest technology is now open for students.",
    image: newsImage3,
    date: "January 5, 2025",
    author: "IT Dept",
    category: "Facilities",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Latest Updates</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4">
            News & Announcements
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest happenings, achievements, and events at
            Bright Horizon Academy.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card card-hover group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {item.author}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group/link"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
          >
            <Link to="/news">
              View All News
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
