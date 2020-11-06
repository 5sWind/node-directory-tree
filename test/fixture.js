tree = {
  "path": "./test/test_data",
  "name": "test_data",
  "type": "directory",
  "children": [
    {
      "content": "Hello world\n",
      "path": "test/test_data/file_a.txt",
      "name": "file_a.txt",
      // "size": 12,
      "type": "file",
      // "extension": ".txt"
    },
    {
      "content": "Phasellus varius tincidunt est, accumsan hendrerit justo feugiat non. Proin hendrerit, nibh lobortis auctor suscipit, felis nibh malesuada erat, at venenatis ex risus id enim. Nulla rutrum velit ut rhoncus molestie. Quisque ac accumsan risus. Sed non nisi non libero volutpat lobortis. Aliquam viverra felis non lacus efficitur rutrum. Ut sagittis metus dolor, non efficitur turpis porta eget. Praesent ullamcorper, lacus congue suscipit accumsan, leo magna rhoncus nisl, vitae rhoncus dolor odio in odio. Nam neque odio, auctor et lacinia id, posuere sed enim. Etiam sit amet purus viverra, ultrices nisl sit amet, porttitor leo. Ut imperdiet congue pretium. Cras quis neque et lorem scelerisque malesuada. Maecenas et vestibulum erat. Cras faucibus tristique purus at dapibus. Phasellus auctor justo ante, vel feugiat arcu lobortis eu. Sed arcu diam, tincidunt vel leo ac, iaculis vehicula lacus.",
      "path": "test/test_data/file_b.txt",
      "name": "file_b.txt",
      // "size": 3756,
      "type": "file",
      // "extension": ".txt"
    },
    {
      "path": "test/test_data/some_dir",
      "name": "some_dir",
      "type": "directory",
      "children": [
        {
          "path": "test/test_data/some_dir/another_dir",
          "name": "another_dir",
          "type": "directory",
          "children": [
            {
              "content": "Hello world\n",
              "path": "test/test_data/some_dir/another_dir/file_a.txt",
              "name": "file_a.txt",
              // "size": 12,
              "type": "file",
              // "extension": ".txt"
            },
            {
              "content": "Curabitur imperdiet tortor turpis. Ut eu faucibus sem, ut suscipit tellus. Quisque vitae nunc et felis pretium pellentesque sed in mi. Fusce eu eros nulla. Integer sagittis a ligula non vehicula. Pellentesque consequat lacinia justo ac tempor. Cras accumsan nibh dictum eros blandit, nec tempor ante egestas. Proin vitae augue vitae lorem eleifend faucibus cursus a eros. Maecenas quam velit, tincidunt nec quam quis, cursus finibus eros. Suspendisse dignissim tempus tortor, vel imperdiet mi gravida sed. Nam placerat sapien vel quam efficitur mattis. Mauris vehicula dolor id lacus viverra, eu vehicula arcu suscipit.",
              "path": "test/test_data/some_dir/another_dir/file_b.txt",
              "name": "file_b.txt",
              // "size": 3756,
              "type": "file",
              // "extension": ".txt"
            }
          ],
          // "size": 3768
        },
        {
          "content": "Hello world\n",
          "path": "test/test_data/some_dir/file_a.txt",
          "name": "file_a.txt",
          // "size": 12,
          "type": "file",
          // "extension": ".txt"
        },
        {
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices ligula at metus iaculis accumsan. Donec at aliquam justo. Phasellus eu orci gravida, rutrum eros eget, ultrices lacus. Mauris lacinia tortor eu vestibulum vestibulum. Sed eleifend nec ex vel egestas. Donec viverra nibh eu neque gravida, in tincidunt nisi ultricies. Praesent dictum molestie magna mollis accumsan. Proin sed egestas quam. Mauris luctus ante ipsum, non porta ex ultrices eu. Quisque gravida lectus ut diam porta, ut tempus magna fermentum. In hac habitasse platea dictumst. Phasellus sollicitudin tempor feugiat. Nullam imperdiet cursus arcu, sit amet interdum enim feugiat eget. Ut elit metus, semper in turpis luctus, aliquam pharetra libero. Morbi eget lectus vel enim suscipit tempus eget et ipsum.",
          "path": "test/test_data/some_dir/file_b.txt",
          "name": "file_b.txt",
          // "size": 3756,
          "type": "file",
          // "extension": ".txt"
        }
      ],
      // "size": 7536
    },
    {
      "path": "test/test_data/some_dir_2",
      "name": "some_dir_2",
      "type": "directory",
      "children": [
        {
          "content": "",
          "path": "test/test_data/some_dir_2/.gitkeep",
          "name": ".gitkeep",
          // "size": 0,
          "type": "file",
          // "extension": ""
        }
      ],
      // "size": 0
    }
  ],
  // "size": 11304
}

module.exports = tree;
