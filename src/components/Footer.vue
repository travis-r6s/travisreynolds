<template>
  <footer id="footer">
    <div class="inner">
      <ul class="icons">
        <li>
          <a
            href="https://gitlab.com/travisreynolds"
            class="icon alt fa-gitlab"
            aria-label="View Gitlab Profile">
            <gitlab-icon />
            <span class="label">GitLab</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/cirrus_creative"
            class="icon alt fa-twitter"
            aria-label="View Twitter Profile">
            <twitter-icon />
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/thetre97"
            class="icon alt fa-github"
            aria-label="View Github Profile">
            <github-icon />
            <span class="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/travis-reynolds/"
            class="icon alt fa-linkedin"
            aria-label="View LinkedIn Profile">
            <linkedin-icon />
            <span class="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Travis Reynolds</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { TwitterIcon, LinkedinIcon, GithubIcon, GitlabIcon } from 'vue-feather-icons'
export default {
  components: { TwitterIcon, LinkedinIcon, GithubIcon, GitlabIcon }
}
</script>
