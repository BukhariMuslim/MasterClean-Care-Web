<footer class="app-footer">
    <div class="site-footer-right">
        Made with <i class="voyager-heart"></i> by <a href="http://masterclean-care.tk" target="_blank">The Master Clean & Care Team</a>
        @php $version = Voyager::getVersion(); @endphp
        @if (!empty($version))
            - {{ $version }}
        @endif
    </div>
</footer>
