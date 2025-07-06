diff --git a/js/main.js b/js/main.js
index bbf3473e78e49943956243075b2968d5ebac0888..d332f59e0090292bc82d6f53c4d25f26119b2793 100644
--- a/js/main.js
+++ b/js/main.js
@@ -1,3 +1,6 @@
 document.addEventListener('DOMContentLoaded', () => {
-  console.log('Njorden site loaded');
-});
+  const header = document.querySelector('.site-header');
+  window.addEventListener('scroll', () => {
+    header.classList.toggle('scrolled', window.scrollY > 50);
+  });
+});
