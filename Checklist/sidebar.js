		function toggleSidebar() {
			const sidebar = document.getElementById('sidebar');
			sidebar.classList.toggle('sidebar-expanded');
			sidebar.classList.toggle('sidebar-collapsed');
		}

		function expandSidebar() {
			const sidebar = document.getElementById('sidebar');
			sidebar.classList.add('sidebar-expanded');
			sidebar.classList.remove('sidebar-collapsed');
		}

		function collapseSidebar() {
			const sidebar = document.getElementById('sidebar');
			sidebar.classList.add('sidebar-collapsed');
			sidebar.classList.remove('sidebar-expanded');
		}
