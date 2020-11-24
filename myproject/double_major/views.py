from django.shortcuts import render
from .models import Post
# Create your views here.
def index(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'main_content/index.html', {'posts': posts})