from django.shortcuts import render
from .models import WorkDone, Blogs, FooterImage

def home_page(request):
    work_done = WorkDone.objects.all()
    blogs = Blogs.objects.all()
    footer_bg = FooterImage.objects.all()
    context = {
        'work_done': work_done,
        'blogs' : blogs,
        'footer_bg' : footer_bg
    }

    return render(request,'portfolio/home_page.html', context)


