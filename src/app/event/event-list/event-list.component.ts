import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {

  events: any[] = [
    {
      'name': "AWS Summit 2017",
      'date': "1494606522592",
      'location': "Yashwantpur",
      'cardImage': "https://d0.awsstatic.com/events/aws-hosted-events/2017/APAC/Summit/summit-17-bangalore-logo.png",
      'description': 'AWS DevDay is a free, full-day technical event where new developers will learn about some of the hottest topics in cloud computing, and experienced developers can dive deep on newer AWS services. Join us for technical sessions, live demos, and networking with AWS technical experts and your peers.'
    },
    {
      'name': "DEVintersection Spring 2017",
      'date': "1494606522592",
      'location': "Lake Buena Vista, Florida, United States",
      'cardImage': "https://raygun.com/blog/wp-content/uploads/2016/11/dev-banner.png",
      'description': "Our DEVintersection Spring 2017 line-up covers the diversity of the .NET development stack today. Eleven full-day workshops and a huge number of sessions from which to choose, you'll dive into how you can take your existing development skills and apply them to the latest tools, and learn new ways to think about how you build software. Whether you’re focused on web development, desktop, mobile, or tablet, Microsoft continues to advance their tools, and our team of experts and Microsoft personnel are here to get you up to speed with the best way to take advantage of those tools today."
    },
    {
      'name': "IBM Bluemix French MOOC",
      'date': "1494606522592",
      'location': "Domlur",
      'cardImage': "https://www.ibm.com/blogs/bluemix/wp-content/uploads/2016/10/bluemix-logo-2016.png",
      'description': "To get a hands-on introduction to Kubernetes clusters, and share DockerCon stories over beer and snacks, join us for a workshop/reception on Wednesday (4/19). IBM developer advocates Doug Davis and Morgan Bauer will talk through the details of creating a new cluster, deploying an app, and connecting a cloud service. Get the code and follow along if you have your laptop."
    },
    {
      'name': "Heroku Devoxx UK",
      'date': "1494606522592",
      'location': "London",
      'cardImage': "https://pbs.twimg.com/media/CLyt3T3WgAAZJ3S.jpg",
      'description': "Every year the Devoxx Family welcomes over 11,000 developers to events in Belgium, France, UK, Poland, Morocco & the USA. Devoxx UK returns to London 11th – 12th May, 2017. Once again we will welcome amazing speakers and attendees for the very best developer content and awesome experiences."
    }
  ];
  constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data.title);
  }

}
